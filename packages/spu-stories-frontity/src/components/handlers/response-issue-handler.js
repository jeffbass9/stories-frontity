import React from "react";
import { Global, css, connect } from "frontity";
const responseIssueHandler = {
  name: "response-issues",
  priority: 12,
  pattern: "/response-issues/:id",
  func: async({link, params, state, libraries}) => {
    const { id } = params;
    const response = await libraries.source.api.get({
      endpoint: `/wp/v2/response_issues/${id}`
    });

    const pageData = await response.json();

    const issue = state.source.data[link];

    Object.assign(issue, {
      items: pageData.items
    })
  }
};

export default responseIssueHandler;
