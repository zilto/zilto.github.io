import sqlite3
from pathlib import Path
import json

from pydantic import BaseModel


class Project(BaseModel):
    name: str
    description: str
    highlights: list[str]
    technologies: list[str]
    year: int
    url: str
    tags: list[str]


class Blog(BaseModel):
    title: str
    content: str
    publication_date: str
    link: str


# TODO load json files into SQLite
# TODO implement Sqlite CRUD
# TODO use FastAPI schema validation


def load_project(project_fpath: str) -> dict:
    with open(project_fpath, "rb") as f:
        project = json.load(f)

    return project


def load_all_projects(directory: str) -> list[dict]:
    base_path = Path(directory)

    projects = []
    for filepath in base_path.iterdir():
        if filepath.is_file() and filepath.suffix == ".json":
            project = load_project(str(filepath))
            projects.append(project)

    projects = sorted(projects, key=lambda x: x["year"], reverse=True)

    return projects

def reorder_starred_projects(projects: list) -> list:
    reordered = []
    others = []
    for p in projects:
        if p.get("star"):
            reordered.append(p)
        else:
            others.append(p)

    reordered.extend(others)

    return reordered
