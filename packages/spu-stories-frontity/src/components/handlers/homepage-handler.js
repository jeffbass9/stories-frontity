import React from "react";
import { Global, css, connect } from "frontity";
import parse from "html-react-parser"
const homepageHandler = {
  name: "homepage",
  priority: 10,
  pattern: "/homepage",
  func: async({link, params, state, libraries}) => {
    const { slug } = params;
    const response = await libraries.source.api.get({
      endpoint: `/pages/46`
    });

    const homepageData = await response.json();

    const homepage = state.source.data[link];

    Object.assign(homepage, {
      items: homepageData.items
    })
  }
};

export default homepageHandler;
