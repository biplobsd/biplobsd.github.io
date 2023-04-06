import os
import re
import json
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
    # Extract image from markdown image tag
    pattern = r"!\[.*\]\((.*)\)"
    match = re.search(pattern, content)
    if match:
        return match.group(1)
    else:
        # Extract image from HTML img tag
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
        if os.path.exists(filePath):
            create_time = os.path.getctime(filePath)
            modify_time = os.path.getmtime(filePath)
            date = max(create_time, modify_time)
            return int(date)
    return int(date_str)


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
            # assuming average reading speed of 500 words per minute
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
            title = post.get('title', filename[:-3])
            desc = post.get('desc', '')
            if not desc:
                html = markdown(post.content)
                text = ''.join(BeautifulSoup(
                    html, features="html.parser").findAll(string=True))
                desc = text[:100].strip()

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
