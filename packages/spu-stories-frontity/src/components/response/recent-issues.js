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
  const issues = state.source.response_issue
  console.log(issues)
  return (
    <RecentIssuesWrapper>
      <div className="section-header">Recent Issues</div>
      <div className="issue-article-container">
        {issues.map((item) => {
            let featured_img = item.acf.response_cover
            let quarter = item.acf.response_issue_number
            let title = item.title.rendered

            return (
              <Link key={item.id} link={item.link} className="issue-card">
                <div className="issue-image">
                  <img src={featured_img}/>
                </div>
                <div className="text">
                    <div className="quarter">{quarter}</div>
                    <div className="title">{parse(title)}</div>
                </div>
              </Link>
              )
            })
        }
      </div>
      <Link link="/response-issues">
        View More
      </Link>
    </RecentIssuesWrapper>
  )
}

export default connect(RecentIssues)
