import React from "react"
import ResponseCoverStory from "../../components/response/response-cover-story"
import ResponseHeader from "../../components/response/response-header"
import ResponseFooter from "../../components/response/response-footer"
import RecentIssues from "../../components/response/recent-issues"
import { connect, Head } from "frontity"


const ResponseIssue = ({ state, libraries }) => {
  const data = state.source.get(state.router.link)
  const issue = state.source[data.type][data.id]


  const Html2React = libraries.html2react.Component

  return (
    <>
      <ResponseHeader/>
        <div>
          <ResponseCoverStory/>
          <RecentIssues/>
        </div>
      <ResponseFooter/>
    </>
  )
}

export default connect(ResponseIssue)
