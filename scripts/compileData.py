import os
import sys
import re
import json
import time
import subprocess
import frontmatter
from bs4 import BeautifulSoup
from markdown import markdown
from dotenv import load_dotenv

def replaceImgRelativePath(data, wPath):
    imgPattern = r"\.\.\/images\/"

    baseUrl = os.getenv('NEXT_PUBLIC_USER_CONTENT_BASE_URL')
    baseImgPath = os.getenv('NEXT_PUBLIC_USER_CONTENT_BASE_IMG_PATH')
    repoPath = os.getenv('NEXT_PUBLIC_REPO_PATH')
    dataBranch = os.getenv('NEXT_PUBLIC_REPO_DATA_BRANCH')
    if not (baseImgPath or baseUrl or repoPath or dataBranch):
        raise Exception('Error: baseImgPath or baseUrl key not found')
        sys.exit(1)

    baseImgUrl = baseUrl + repoPath + "/" + dataBranch + baseImgPath

    if re.search(imgPattern, data):
        finalData = re.sub(imgPattern, baseImgUrl, data)

        with open(wPath, 'w', encoding="utf8") as w:
            w.write(finalData)

        return finalData
    return data


def updateConfig(key, value, path="db"):
    configPath = os.path.join(path, 'configs.json')

    if os.path.exists(configPath):
        with open(configPath, 'r') as f:
            db_configs = json.load(f)
    else:
        db_configs = {}

    db_configs[key] = value

    with open(configPath, 'w') as f:
        json.dump(db_configs, f)


def get_image_from_content(content):
    pattern = r"!\[.*\]\((.*)\)"
    match = re.search(pattern, content)
    if match:
        return match.group(1)
    else:
        pattern = r"<img.*src=\"([^\"]+)\""
        match = re.search(pattern, content)
        if match:
            return match.group(1)
        else:
            return ""


def extractReadTime(content):
    html = markdown(content)
    text = ''.join(BeautifulSoup(
        html, features="html.parser").findAll(string=True))

    words = text.split()
    read_time_minutes = round(len(words) / 200)
    if read_time_minutes < 1:
        return 1
    return read_time_minutes


def extractDate(filePath, post):
    try:
        date_str = post['date']
        return int(date_str)
    except KeyError:
        try:
            output = subprocess.check_output(
                ['git', 'log', '-1', '--pretty=format:%ct', filePath])
            date_str = output.decode().strip()
            if not date_str:
                raise "No date info"
        except:
            stat = os.stat(filePath)
            date_str = str(int(stat.st_mtime))
        return int(date_str) * 1000


def get_title_from_content(file_path, content):
    html = markdown(content)
    soup = BeautifulSoup(html, 'html.parser')
    title = soup.find('h1')
    if title:
        return title.text
    else:
        return os.path.splitext(os.path.basename(file_path))[0]


def extract_desc_from_content(content):
    html = markdown(content)
    soup = BeautifulSoup(html, 'html.parser')

    first_headings = soup.find_all(re.compile('^h[1-6]$'), recursive=False)

    desc_elem = None
    for heading in first_headings:
        next_elem = heading.find_next_sibling()
        if next_elem and not next_elem.name.startswith('h'):
            desc_elem = next_elem
            break

    if desc_elem:
        desc = desc_elem.get_text().strip()
    else:
        desc = soup.get_text().strip()

    return desc if len(desc) < 100 else desc[:100] + '...'


def parsePlatforms(post):
    platforms = []
    for key, value in post.to_dict().items():
        if key.startswith("p_name"):
            index = key.split("_")[2]
            p_link = post.get(f"p_link_{index}")
            if not p_link:
                print(f"Error: missing link for platform '{key},{value}'")
                sys.exit(1)
            platform = {
                "name": value,
                "link": p_link
            }
            platforms.append(platform)
    return platforms


def parseImgs(post):
    imgs = []
    for key, value in post.to_dict().items():
        if key.startswith("img_"):
            img_link = post.get(key)
            if not img_link:
                print(f"Error: missing img link '{key},{value}'")
                sys.exit(1)
            imgs.append(img_link)
    return imgs


def projectCompile():

    FOLDER_PATH = "projects/"

    if not os.path.exists(FOLDER_PATH):
        print('Error not found directory: '+FOLDER_PATH)
        return

    projects_list = []

    for filename in os.listdir(FOLDER_PATH):
        if filename.endswith(".md"):
            file_path = os.path.join(FOLDER_PATH, filename)

            with open(file_path, "r", encoding="utf8") as f:
                md_text = f.read()

            md_text = replaceImgRelativePath(md_text, file_path)

            post = frontmatter.loads(md_text)
            app_name = post.get('appName', '')
            app_logo = post.get('appLogo', '')
            company_name = post.get('companyName', '')
            company_logo = post.get('companyLogo', '')
            date = extractDate(file_path, post)
            read_time = extractReadTime(post.content)
            img_url = post.get(
                'imgUrl', get_image_from_content(post.content))
            what_text = post.get('whatText', '')
            result = post.get('result', '')

            project_dict = {
                "imgUrl": img_url,
                "app": {"name": app_name, "logoUrl": app_logo},
                "company": {"name": company_name, "logoUrl": company_logo},
                "whatText": what_text,
                "result": result,
                "date": date,
                "readTime": read_time,
                "fileName": filename
            }

            projects_list.append(project_dict)

    sorted_projects = sorted(
        projects_list, key=lambda x: x['date'], reverse=True)
    
    tag_process(sorted_projects, "project")

    output_dict = {"projects": sorted_projects}

    with open("db/projects.json", "w") as f:
        json.dump(output_dict, f)

    updateConfig('projectTotal', len(sorted_projects))


def make_hashable(d):
    return {
        k: tuple(v) if isinstance(v, list) else make_hashable(v) if isinstance(v, dict) else v
        for k, v in d.items()
    }
    
def make_hashable(obj):
    if isinstance(obj, list):
        return tuple(make_hashable(item) for item in obj)
    elif isinstance(obj, dict):
        return tuple(sorted((k, make_hashable(v)) for k, v in obj.items()))
    return obj

def process_tags(tags, date, tagsList):
    for tag in tags:
        tag_lower = tag.lower()
        existing_tag = next((t for t in tagsList if t['tag'] == tag_lower), None)

        if existing_tag:
            if date > existing_tag['date']:
                existing_tag['date'] = date
        else:
            tagsList.append({"tag": tag_lower, "date": date})

    return tagsList

def tag_process(sortedData:list, nameRaw ="blog"):
    if nameRaw == "company":
        name = nameRaw
    else:
        name = nameRaw+"s"
    tagsPath = f"db/tags/{name}/"
    tagsSet = []

    for i in sortedData:
        tags = i.get('tags', [])
        date = i.get('date', int(time.time()))
        tagsSet = process_tags(tags, date, tagsSet)

        for t in tags:
            tagPath = os.path.join(tagsPath, t.lower())
            path = os.path.join(tagPath, "data.json")
            os.makedirs(tagPath, exist_ok=True)

            dataObj = {name: []}

            if os.path.exists(path):
                try:
                    with open(path, 'r') as f:
                        dataObj = json.load(f)
                except (json.JSONDecodeError, FileNotFoundError):
                    print(f"Error reading {path}, using an empty list.")

            dataList = dataObj.get(name, [])
            dataList.append(i)
            unique_dict_list = [dict(t) for t in {make_hashable(d) for d in dataList}]
            sorted_unique_dict_list = sorted(
                unique_dict_list, key=lambda x: x['date'], reverse=True)

            dict_tag = {name: sorted_unique_dict_list}
            with open(path, "w") as f:
                json.dump(dict_tag, f)

            updateConfig(f'{nameRaw}Total', len(unique_dict_list), tagPath)

    os.makedirs(tagsPath, exist_ok=True)
    updateConfig('tags', tagsSet, tagsPath)

def blogsCompile():

    FOLDER_PATH = "blogs/"

    if not os.path.exists(FOLDER_PATH):
        print('Error not found directory: '+FOLDER_PATH)
        return

    blogs_list = []

    for filename in os.listdir(FOLDER_PATH):
        if filename.endswith(".md"):
            file_path = os.path.join(FOLDER_PATH, filename)

            with open(file_path, "r", encoding="utf8") as f:
                md_text = f.read()

            md_text = replaceImgRelativePath(md_text, file_path)

            post = frontmatter.loads(md_text)
            title = post.get('title', get_title_from_content(
                filename, post.content))
            desc = post.get('desc', extract_desc_from_content(post.content))

            date = extractDate(file_path, post)
            read_time = extractReadTime(post.content)
            img_url = post.get('imgUrl', get_image_from_content(post.content))

            tags = post.get('tags', [])

            blog_dict = {
                "imgUrl": img_url,
                "title": title,
                "desc": desc,
                "date": date,
                "readTime": read_time,
                "fileName": filename,
                "tags": list(map(str.lower, tags))
            }

            blogs_list.append(blog_dict)

    sorted_blogs = sorted(
        blogs_list, key=lambda x: x['date'], reverse=True)

    tag_process(sorted_blogs, "blog")

    output_dict = {"blogs": sorted_blogs}

    with open("db/blogs.json", "w") as f:
        json.dump(output_dict, f)

    updateConfig('blogTotal', len(sorted_blogs))


def load_config(path):
    if os.path.exists(path):
        with open(path, 'r') as f:
            return json.load(f)
    return {}

def tagCompile():
    COMPANY_TYPE = "company"
    tagsPathBase = os.path.join("db", "tags")
    types = ["project", "blog", "company", "app"]
    final_tags_dict = {}

    def process_tags(tags, type, typeFolder, tagsPath):
        for tag in tags:
            tag_path = os.path.join(tagsPath, tag['tag'], 'configs.json')
            db_configs = load_config(tag_path)
            total = db_configs.get(f'{type}Total', 0)

            if tag['tag'] not in final_tags_dict:
                final_tags_dict[tag['tag']] = {
                    "tag": tag['tag'],
                    "exist": [{
                        "type": typeFolder,
                        "total": total,
                        "date": tag['date'],
                    }],
                    "latest_date": tag['date'],
                    "total": total,
                }
            else:
                final_tags_dict[tag['tag']]['total'] += total
                final_tags_dict[tag['tag']]['exist'].append({
                    "type": typeFolder,
                    "total": total,
                    "date": tag['date'],
                })
                latest_date = final_tags_dict[tag['tag']]['latest_date']
                if tag['date'] > latest_date:
                    final_tags_dict[tag['tag']]['latest_date'] = tag['date']

    for type in types:
        typeFolder = type if type == COMPANY_TYPE else type + "s"
        tagsPath = os.path.join(tagsPathBase, typeFolder)

        if not os.path.exists(tagsPath):
            print(f'Error not found directory: {tagsPath}')
            return

        configsPath = os.path.join(tagsPath, "configs.json")
        db_configs = load_config(configsPath)
        tags = db_configs.get('tags', [])
        process_tags(tags, type, typeFolder, tagsPath)

    sorted_tags = sorted(final_tags_dict.values(), key=lambda x: x['latest_date'], reverse=True)
    updateConfig('tags', sorted_tags, "db/tags")

def appsCompile():

    FOLDER_PATH = "apps/"

    apps_list = []

    if not os.path.exists(FOLDER_PATH):
        print('Error not found directory: '+FOLDER_PATH)
        return

    for filename in os.listdir(FOLDER_PATH):
        if filename.endswith(".md"):
            file_path = os.path.join(FOLDER_PATH, filename)

            with open(file_path, "r", encoding="utf8") as f:
                md_text = f.read()

            md_text = replaceImgRelativePath(md_text, file_path)

            post = frontmatter.loads(md_text)
            title = post.get('title', get_title_from_content(
                filename, post.content))

            date = extractDate(file_path, post)
            logoUrl = post.get('logoUrl', get_image_from_content(post.content))

            category = post.get('category', 'Other')

            platforms = parsePlatforms(post)
            imgs = parseImgs(post)

            tags = post.get('tags', [])

            app_dict = {
                "imgUrl": logoUrl,
                "title": title,
                "category": category,
                "date": date,
                "fileName": filename,
                "imgs": imgs,
                "platforms": platforms,
                "tags": list(map(str.lower, tags))
            }

            apps_list.append(app_dict)

    sorted_apps = sorted(
        apps_list, key=lambda x: x['date'], reverse=True)

    tag_process(sorted_apps, "app")

    output_dict = {"apps": sorted_apps}

    with open("db/apps.json", "w") as f:
        json.dump(output_dict, f)

    updateConfig('appTotal', len(sorted_apps))


def companyCompile():

    FOLDER_PATH = "company/"

    company_list = []

    if not os.path.exists(FOLDER_PATH):
        print('Error not found directory: '+FOLDER_PATH)
        return

    for filename in os.listdir(FOLDER_PATH):
        if filename.endswith(".md"):
            file_path = os.path.join(FOLDER_PATH, filename)

            with open(file_path, "r", encoding="utf8") as f:
                md_text = f.read()

            md_text = replaceImgRelativePath(md_text, file_path)

            post = frontmatter.loads(md_text)
            title = post.get('title', get_title_from_content(
                filename, post.content))

            date = extractDate(file_path, post)
            logoUrl = post.get('logoUrl', get_image_from_content(post.content))
            homePage = post.get('homePage', '')
            start = post.get('start', -1)
            end = post.get('end', -1)
            read_time = extractReadTime(post.content)

            company_dict = {
                "imgUrl": logoUrl,
                "title": title,
                "homePage": homePage,
                "date": date,
                "start": start,
                "end": end,
                "readTime": read_time,
                "fileName": filename
            }

            company_list.append(company_dict)

    sorted_company = sorted(
        company_list, key=lambda x: x['date'], reverse=True)

    tag_process(sorted_company, "company")

    output_dict = {"company": sorted_company}
    
    with open("db/workInfo.json", "w") as f:
        json.dump(output_dict, f)

    updateConfig('companyTotal', len(sorted_company))

def clean_directory(directory):
    if not os.path.exists(directory):
        print(f"Directory '{directory}' does not exist.")
        return

    for root, _, files in os.walk(directory):
        for file in files:
            file_path = os.path.join(root, file)
            os.remove(file_path)
            print(f"Deleted file: {file_path}")

if __name__ == '__main__':
    
    print("🧹 Starting directory cleanup... 🧹")
    clean_directory("db/tags/")
    print("✅ Directory cleanup completed! ✅")

    load_dotenv(".env.local")
    if not os.path.exists('db'):
        os.makedirs("db", exist_ok=True)

    print('✨ Parsing projects')
    projectCompile()
    print('✅ Project parse done')

    print('📚 Parsing blogs')
    blogsCompile()
    print('✅ Blogs parse done')

    print('📱 Parsing apps')
    appsCompile()
    print('✅ Apps parse done')

    print('👔 Parsing workInfo')
    companyCompile()
    print('✅ WorkInfo parse done')

    print(f"🚀 Parsing tags")
    tagCompile()
    print("✅ Tags parse done")


