{
    "manifest_version": 3,
    "name": "Code Coverage_Keyloop",
    "version": "1.1",
    "description": "Highlights covered lines in GitHub files based on an XML coverage report.",
    "permissions": ["activeTab", "scripting", "storage","tabs"],
    "host_permissions": ["https://raw.githubusercontent.com/*","https://github.com/*"],           
    "content_scripts": [
      {
        "matches": ["https://github.com/*"],
        "js": ["content.js"],
        "css": ["styles.css"]
      }
    ],
    "background": {
      "service_worker": "background.js"
    },
    "icons": {
      "16": "icon.png",
      "48": "icon.png",
      "128": "icon.png"
    }
  }
