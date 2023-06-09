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
          "homepage": "/",
          "postsPage": "/",
          "params": {
            "per_page": 20,
            "type": ["article", "page", "response_issue", "spu_user"]
          },
          "postTypes": [
            {
              "type": "response_issues",
              "endpoint": "response-issues",
              "archive": "/response-issues"
            },
            {
              "type": "articles",
              "endpoint": "articles",
              "archive": "/articles"
            },
            {
              "type": "menus",
              "endpoint": "menus",
              "archive": "/menus"
            },
            {
              "type": "spu-users",
              "endpoint": "spu-users",
              "archive": "/spu-users"
            }
          ],
          "taxonomies": [
            {
              "taxonomy": "response-department",
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
    {
      "name": "@frontity/tiny-router",
      "state": {
        "router": {
          "autoFetch": true
        }
      }
    },
    "@frontity/html2react"
  ]
};


export default settings;
