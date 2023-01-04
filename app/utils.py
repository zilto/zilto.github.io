import json

import requests
import markdown
from jinja2 import Environment, FileSystemLoader


def md2html(md_filepath, output_path):
    environment = Environment(loader=FileSystemLoader("./pipelines"))
    template = environment.get_template("blogpost_template.html")

    html_str = markdown.markdownFromFile(input=md_filepath)
    converted = template.render(blogpost=html_str)

    with open(output_path, "w", encoding="utf-8") as f:
        f.write(converted)


def get_project_repos(output_dir: str = "./projects/projects.json"):
    response = requests.get("https://api.github.com/users/zilto/repos").json()

    parsed = []
    for i in response:
        filtered = {k: v for k, v in i.items() if k in ["name", "html_url", "description", "created_at"]}
        parsed.append(filtered)

    with open(output_dir, "w") as f:
        json.dump(parsed, f)
