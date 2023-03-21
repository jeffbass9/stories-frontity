import React from "react";
import { Global, css, connect } from "frontity";
const menuHandler = {
  name: "menus",
  priority: 10,
  pattern: "/menu/:slug",
  func: async({link, params, state, libraries}) => {
    const { slug } = params;
    const response = await libraries.source.api.get({
      endpoint: `/menus/v1/menus/${slug}`
    });

    const menuData = await response.json();

    const menu = state.source.data[link];

    Object.assign(menu, {
      items: menuData.items,
      isMenu: true
    })
  }
};

export default menuHandler;
