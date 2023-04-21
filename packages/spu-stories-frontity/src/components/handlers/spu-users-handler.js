import React from "react";
import { Global, css, connect } from "frontity";
const spuUsersHandler = {
  name: "spu-users",
  priority: 10,
  pattern: "/spu-users",
  func: async({link, params, state, libraries}) => {
    const { id } = params;
    const response = await libraries.source.api.get({
      endpoint: `/spu-users/v1/spu-users`,
      per_page: 200
    });

    const userData = await response.json();

    const user = state.source.data[link];

    Object.assign(user, {
      items: userData.items
    })
  }
};

export default spuUsersHandler;
