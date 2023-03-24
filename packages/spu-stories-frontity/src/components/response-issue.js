import React from "react"
import ResponseFeatured from "../components/response-featured"
import ResponseHeader from "../components/response-header"
import ResponseFooter from "../components/response-footer"
import { connect, Head } from "frontity"

const ResponseIssue = ({ state, libraries }) => {
  const data = state.source.get(state.router.link)
  const page = state.source[data.type][data.id]

  const Html2React = libraries.html2react.Component

  return (
    <>
      <ResponseHeader/>
        <div>
          <h2>{page.title.rendered}</h2>
          <ResponseFeatured/>
          <Html2React html={page.content.rendered} />
        </div>
      <ResponseFooter/>
    </>
  )
}

export default connect(ResponseIssue)
