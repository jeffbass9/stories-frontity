import React from "react"
import ResponseFeatured from "../../components/response/response-featured"
import ResponseHeader from "../../components/response/response-header"
import ResponseFooter from "../../components/response/response-footer"
import RecentIssues from "../../components/response/recent-issues"
import { connect, Head } from "frontity"

const ResponseIssue = ({ state, libraries }) => {
  const data = state.source.get(state.router.link)
  const issue = state.source.response_issue[data.id]
  

  const Html2React = libraries.html2react.Component

  return (
    <>
      <ResponseHeader/>
        <div>
          <ResponseFeatured/>
          <RecentIssues/>
        </div>
      <ResponseFooter/>
    </>
  )
}

export default connect(ResponseIssue)
