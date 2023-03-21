import React from "react";
import { Global, css, connect } from "frontity";
const pagesHandler = {
  name: "pages",
  priority: 10,
  pattern: "/pages/:id",
  func: async({link, params, state, libraries}) => {
    const { id } = params;
    const response = await libraries.source.api.get({
      endpoint: `/wp/v2/pages/${id}`
    });

    const pageData = await response.json();

    const page = state.source.data[link];

    Object.assign(page, {
      items: pageData.items
    })
  }
};

export default pagesHandler;
