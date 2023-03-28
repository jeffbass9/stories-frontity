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
          "postEndpoint": "articles?_embed",
          "params": {
            "per_page": 20,
            "type": ["article", "page", "response_issue"]
          },
          "postTypes": [
            {
              "type": "response_issue",
              "endpoint": "response-issues",
              "archive": "/response-issues"
            },
            {
              "type": "articles",
              "endpoint": "articles?_embed",
              "archive": "/articles"
            },
            {
              "type": "menus",
              "endpoint": "menus",
              "archive": "/menus"
            }
          ],
          "taxonomies": [
            {
              "taxonomy": "response_department",
              "endpoint": "response-department",
              "postTypeEndpoint": "articles"
            },
            {
              "taxonomy": "subject",
              "endpoint": "subject",
              "postTypeEndpoint": "articles"
            },
            {
              "taxonomy": "topic",
              "endpoint": "topic",
              "postTypeEndpoint": "articles"
            }
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@aamodtgroup/frontity-contact-form-7"
  ]
};


export default settings;
