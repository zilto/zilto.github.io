import markdown
from jinja2 import Environment, FileSystemLoader


def main(md_filepath, output_path):
    environment = Environment(loader=FileSystemLoader("./pipelines"))
    template = environment.get_template("blogpost_template.html")
    
    html_str = markdown.markdownFromFile(input=md_filepath)
    converted = template.render(blogpost=html_str)
    
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(converted)
    
    
if __name__ == "__main__":
    main("./blogs/hamilton_blog.md", "./blogs/hamilton.html")
    