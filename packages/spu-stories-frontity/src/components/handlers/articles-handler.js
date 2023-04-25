import React from "react";
import { Global, css, connect } from "frontity";
const articlesHandler = {
  name: "articles",
  priority: 12,
  pattern: "/articles",
  func: async({link, params, state, libraries}) => {
    const { id } = params;
    const response = await libraries.source.api.get({
      endpoint: `/wp/v2/articles/`
    });

    const pageData = await response.json();

    const article = state.source.data[link];

    Object.assign(article, {
      items: pageData.items
    })
  }
};

export default articlesHandler;
