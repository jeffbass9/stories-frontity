import React from "react";
import { Global, css, connect } from "frontity";
import parse from "html-react-parser"
const responseIssueHandler = {
  name: "response-issues",
  priority: 10,
  pattern: "/response-issues",
  func: async ({ route, state, libraries }) => {
    const { api, populate } = libraries.source;
    const { page, query } = parse(route);

    // 1. Fetch the specified pages.
    const issuePromise = api.get({
      endpoint: "response-issues",
      params: { page, _embed: true, ...state.source.params }
    });
    const [issueResponse] = await Promise.all([
      issuePromise
    ]);

    // 2. Populate the state.
    const items = await populate({ response: issueResponse, state });
    await populate({ response: issueResponse });
    if (page > 1 && items.length === 0)
      throw new Error(`post archive doesn't have page ${page}`);

    // 3. get posts and pages count
    const total = getTotal(response);
    const totalPages = getTotalPages(response);

    // 4. Add data to source.
    Object.assign(state.source.data[route], {
      items,
      total,
      totalPages,
      isArchive: true,
      isPostTypeArchive: true,
      isHome: true
    });
  }
};

export default responseIssueHandler;
