import json
import requests


def get_repos() -> list:
    return requests.get("https://api.github.com/users/zilto/repos").json()


def parse_response(content: list) -> list:
    parsed = []
    
    for i in content:
        filtered = {k:v for k,v in i.items() if k in ["name", "html_url", "description", "created_at"]}
        parsed.append(filtered)
    return parsed
    

def write_projects(parsed: list, output_dir: str) -> None:
    with open(output_dir, "w") as f:
        json.dump(parsed, f)


def main():
    response = get_repos()
    parsed = parse_response(response)
    write_projects(parsed, "./projects/projects.json")
    


if __name__ == "__main__":
    main()