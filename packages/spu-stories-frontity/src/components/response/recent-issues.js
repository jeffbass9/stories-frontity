import React from "react"
import { connect, styled, css } from "frontity"
import Link from "@frontity/components/link"
import article_placeholder from "/packages/spu-stories-frontity/src/images/article-placeholder.jpeg"
import dayjs from "dayjs"
import returnFeaturedImage from "../../services/returnFeaturedImage"
import parse from "html-react-parser"
import RecentIssuesWrapper from "../../components/styles/recent-issues"

const RecentIssues = ({ state, actions }) => {

  const data = state.source.get(state.router.link)
  const issue = state.source.response_issue[data.id]
  const issues = state.source.get("/response-issues").items
  let issue_array = []

  for(let i = 0; i < 6; i++){
    issue_array.push(issues[i]);
  }

  return (
    <RecentIssuesWrapper>
      <div className="section-header">Recent Issues</div>
      <div className="issue-article-container">
        {issue_array.map((item) => {
            let current_post = state.source.response_issue[item.id]
            let featured_img = current_post.acf.response_cover
            let quarter = current_post.acf.response_issue_number
            let title = current_post.title.rendered

            return (
              <Link key={current_post.id} link={current_post.link} className="issue-card">
                <div className="issue-image">
                  <img src={featured_img}/>
                </div>
                <div className="text">
                    <h3 className="quarter">{quarter}</h3>
                    <h4 className="title">{parse(title)}</h4>
                </div>
              </Link>
              )
            })
        }
      </div>
      <Link link="/response-issues" className="view-more-button">
        View More
      </Link>
    </RecentIssuesWrapper>
  )
}

export default connect(RecentIssues)
