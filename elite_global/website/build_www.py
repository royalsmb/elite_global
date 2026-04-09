"""
Build script: generates www/*.html pages from the Vite build output.
Run after `npm run build` to update the www folder.

Usage: python build_www.py
"""

import os
import glob

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PUBLIC_DIST = os.path.join(SCRIPT_DIR, "..", "public", "dist")
WWW_DIR = os.path.join(SCRIPT_DIR, "..", "www")

PAGES = {
    "home": {
        "title": "Elite Global Consultancy Co. Ltd",
        "description": "Elite Global Consultancy offers professional advice on corporate governance, performance management, and organizational restructuring in The Gambia.",
    },
    "services": {
        "title": "Our Services | Elite Global Consultancy",
        "description": "Corporate training, business consultancy, management consultancy, HR management, oil & gas, and procurement services in The Gambia.",
    },
    "about": {
        "title": "About Us | Elite Global Consultancy",
        "description": "A premier professional services firm dedicated to driving organizational excellence in The Gambia and beyond.",
    },
    "activities": {
        "title": "Activities & News | Elite Global Consultancy",
        "description": "Latest training programs, consultancy engagements, and partnerships by Elite Global Consultancy.",
    },
    "contact": {
        "title": "Contact Us | Elite Global Consultancy",
        "description": "Get in touch with Elite Global Consultancy Co. Ltd in Banjul, The Gambia.",
    },
    "review": {
        "title": "Leave a Review | Elite Global Consultancy",
        "description": "Share your experience working with Elite Global Consultancy. Your feedback helps us serve you better.",
    },
}


def find_built_assets():
    js_files = glob.glob(os.path.join(PUBLIC_DIST, "js", "*.js"))
    css_files = glob.glob(os.path.join(PUBLIC_DIST, "css", "*.css"))

    js_name = os.path.basename(js_files[0]) if js_files else "index.js"
    css_name = os.path.basename(css_files[0]) if css_files else "index.css"

    return js_name, css_name


def generate_page_html(page_name, title, description, js_name, css_name):
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{title}</title>
    <meta name="description" content="{description}" />
    <link rel="icon" type="image/x-icon" href="/assets/elite_global/img/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/elite_global/img/favicon-180.png" />
    <script type="module" crossorigin src="/assets/elite_global/dist/js/{js_name}"></script>
    <link rel="stylesheet" crossorigin href="/assets/elite_global/dist/css/{css_name}" />
</head>
<body>
    <div id="root"></div>
</body>
</html>
"""


def main():
    os.makedirs(WWW_DIR, exist_ok=True)

    # Clean old html files
    for f in glob.glob(os.path.join(WWW_DIR, "*.html")):
        os.remove(f)

    js_name, css_name = find_built_assets()
    print(f"JS: {js_name}")
    print(f"CSS: {css_name}")

    for page_name, meta in PAGES.items():
        html = generate_page_html(
            page_name, meta["title"], meta["description"], js_name, css_name
        )
        filepath = os.path.join(WWW_DIR, f"{page_name}.html")
        with open(filepath, "w") as f:
            f.write(html)
        print(f"Created: www/{page_name}.html -> /{page_name}")

    # Also create index.html that redirects to /home
    index_html = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="refresh" content="0;url=/home" />
    <title>Elite Global Consultancy Co. Ltd</title>
</head>
<body>
    <p>Redirecting to <a href="/home">home</a>...</p>
</body>
</html>
"""
    with open(os.path.join(WWW_DIR, "index.html"), "w") as f:
        f.write(index_html)
    print("Created: www/index.html -> redirects to /home")

    print("\nDone! All www pages generated.")


if __name__ == "__main__":
    main()
