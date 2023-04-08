import os
import re
import json
import subprocess
import frontmatter
from bs4 import BeautifulSoup
from markdown import markdown


def updateConfig(key, value):
    configPath = os.path.join('db', 'configs.json')

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
    except KeyError:
        try:
            output = subprocess.check_output(['git', 'log', '-1', '--pretty=format:%ct', filePath])
            date_str = output.decode().strip()
            return int(date_str) * 1000
        except subprocess.CalledProcessError:
            return 1680888147920
    return int(date_str)


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


def projectCompile():

    FOLDER_PATH = "projects/"

    projects_list = []

    for filename in os.listdir(FOLDER_PATH):
        if filename.endswith(".md"):
            file_path = os.path.join(FOLDER_PATH, filename)

            with open(file_path, "r") as f:
                md_text = f.read()

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

    output_dict = {"projects": sorted_projects}

    with open("db/projects.json", "w") as f:
        json.dump(output_dict, f)

    updateConfig('projectTotal', len(sorted_projects))


def blogsCompile():

    FOLDER_PATH = "blogs/"

    blogs_list = []

    for filename in os.listdir(FOLDER_PATH):
        if filename.endswith(".md"):
            file_path = os.path.join(FOLDER_PATH, filename)

            with open(file_path, "r") as f:
                md_text = f.read()

            post = frontmatter.loads(md_text)
            title = post.get('title', get_title_from_content(filename, post.content))
            desc = post.get('desc', extract_desc_from_content(post.content))

            date = extractDate(file_path, post)
            read_time = extractReadTime(post.content)
            img_url = post.get('imgUrl', get_image_from_content(post.content))

            blog_dict = {
                "imgUrl": img_url,
                "title": title,
                "desc": desc,
                "date": date,
                "readTime": read_time,
                "fileName": filename
            }

            blogs_list.append(blog_dict)

    sorted_blogs = sorted(
        blogs_list, key=lambda x: x['date'], reverse=True)

    output_dict = {"blogs": sorted_blogs}

    with open("db/blogs.json", "w") as f:
        json.dump(output_dict, f, indent=2)

    updateConfig('blogTotal', len(sorted_blogs))


if __name__ == '__main__':
    print('Parsing projects')
    projectCompile()
    print('Project parse done')

    print('Parsing blogs')
    blogsCompile()
    print('Blogs parse done')
