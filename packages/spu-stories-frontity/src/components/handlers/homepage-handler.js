import React from "react";
import { Global, css, connect } from "frontity";
import parse from "html-react-parser"
const homepageHandler = {
  name: "homepage",
  priority: 10,
  pattern: "/homepage",
  func: async ({ route, state, libraries }) => {
    const { api, populate } = libraries.source;
    const { page, query } = parse(route);

    // 1. Fetch the specified pages.
    const homePromise = api.get({
      endpoint: "posts",
      params: { page, _embed: true, ...state.source.params }
    });
    const homepagePromise = api.get({
      endpoint: "pages",
      params: { id: 46, _embed: true }
    });
    const [homeResponse, homepageResponse] = await Promise.all([
      homePromise,
      homepagePromise
    ]);

    // 2. Populate the state.
    const items = await populate({ response: homeResponse, state });
    await populate({ response: homepageResponse });
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

export default homepageHandler;
