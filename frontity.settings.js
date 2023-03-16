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
          "postTypes": [
            {
              "type": "response-issues",
              "endpoint": "response-issues",
              "archive": "/response-issues"
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
