const settings = {
  "name": "stories-frontity",
  "state": {
    "frontity": {
      "url": "https://stories.spu.edu",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "spu-stories-frontity"
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://stories.spu.edu",
          "postEndpoint": "articles",
          "params": {
            "per_page": 8
          },
          "postTypes": [
            {
              "type": "response-issues",
              "endpoint": "response-issues",
              "archive": "/response-issues"
            },
            {
              "type": "articles",
              "endpoint": "articles",
              "archive": "/articles"
            }
          ],
          "taxonomies": [
            {
              "taxonomy": "response-department",
              "endpoint": "response-departments",
              "postTypeEndpoint": "response-issues"
            },
            {
              "taxonomy": "subject",
              "endpoint": "subjects",
              "postTypeEndpoint": "articles"
            },
            {
              "taxonomy": "topic",
              "endpoint": "topics",
              "postTypeEndpoint": "articles"
            }
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};


export default settings;
