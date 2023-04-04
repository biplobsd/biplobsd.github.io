import os
import json

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


def projectCompile():
    # Set the path to the folder containing the md files
    FOLDER_PATH = "projects/"

    # Create an empty list to store the project information
    projects_list = []

    # Loop through each md file in the folder
    for filename in os.listdir(FOLDER_PATH):
        if filename.endswith(".md"):
            # Open the md file and read its contents
            with open(os.path.join(FOLDER_PATH, filename), "r") as f:
                md_text = f.read()

            # Extract the required information from the md text
            app_name = md_text.split("appName: ")[1].split("\n")[0]
            app_logo = md_text.split("appLogo: ")[1].split("\n")[0]
            company_name = md_text.split("companyName: ")[1].split("\n")[0]
            company_logo = md_text.split("companyLogo: ")[1].split("\n")[0]
            date = int(md_text.split("date: ")[1].split("\n")[0])
            read_time = int(md_text.split("readTime: ")[1].split("\n")[0])
            img_url = md_text.split("imgUrl: ")[1].split("\n")[0]
            what_text = md_text.split("whatText: ")[1].split("\n")[0]
            result = md_text.split("result: ")[1].split("\n")[0]

            # Create a dictionary with the extracted information
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

            # Append the project dictionary to the list
            projects_list.append(project_dict)

    # Sort the projects list by date in descending order
    sorted_projects = sorted(projects_list, key=lambda x: x['date'], reverse=True)

    # Create a dictionary with the sorted list of projects
    output_dict = {"projects": sorted_projects}

    # Write the output dictionary to a JSON file
    with open("db/projects.json", "w") as f:
        json.dump(output_dict, f)
    
    updateConfig('projectTotal', len(sorted_projects))

def blogsCompile():
    # Set the path to the folder containing the md files
    FOLDER_PATH = "blogs/"

    # Create an empty list to store the project information
    blogs_list = []

    # Loop through each md file in the folder
    for filename in os.listdir(FOLDER_PATH):
        if filename.endswith(".md"):
            # Open the md file and read its contents
            with open(os.path.join(FOLDER_PATH, filename), "r") as f:
                md_text = f.read()

            # Extract the required information from the md text
            title = md_text.split("title: ")[1].split("\n")[0]
            desc = md_text.split("desc: ")[1].split("\n")[0]
            date = int(md_text.split("date: ")[1].split("\n")[0])
            read_time = int(md_text.split("readTime: ")[1].split("\n")[0])
            img_url = md_text.split("imgUrl: ")[1].split("\n")[0]

            # Create a dictionary with the extracted information
            project_dict = {
                "imgUrl": img_url,
                "title": title,
                "desc": desc,
                "date": date,
                "readTime": read_time,
                "fileName": filename
            }

            # Append the project dictionary to the list
            blogs_list.append(project_dict)

    # Sort the projects list by date in descending order
    sorted_projects = sorted(blogs_list, key=lambda x: x['date'], reverse=True)

    # Create a dictionary with the sorted list of projects
    output_dict = {"blogs": sorted_projects}

    # Write the output dictionary to a JSON file
    with open("db/blogs.json", "w") as f:
        json.dump(output_dict, f)
    
    updateConfig('blogTotal', len(sorted_projects))

if __name__ == '__main__':
    print('Parsing projects')
    projectCompile()
    print('Project parse done')

    print('Parsing blogs')
    blogsCompile()
    print('Blogs parse done')