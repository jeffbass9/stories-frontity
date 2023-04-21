import React from "react";
import { Global, css, connect } from "frontity";
const responseDepartmentHandler = {
  name: "response-department",
  priority: 12,
  pattern: "/response-department",
  func: async({link, params, state, libraries}) => {
    const { id } = params;
    const response = await libraries.source.api.get({
      endpoint: `/wp/v2/response-department/`
    });

    const pageData = await response.json();

    const issue = state.source.data[link];

    Object.assign(issue, {
      items: pageData.items
    })
  }
};

export default responseDepartmentHandler;
