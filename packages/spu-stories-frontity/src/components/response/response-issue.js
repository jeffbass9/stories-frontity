import React, {Component, useEffect, useState } from 'react';
import ResponseCoverStory from "../../components/response/response-cover-story"
import ResponseHeader from "../../components/response/response-header"
import ResponseFooter from "../../components/response/response-footer"
import ArticleDepartmentList from "../../components/response/article-department-list"
import RecentIssues from "../../components/response/recent-issues"
import { connect, Head } from "frontity"


const ResponseIssue = ({ state, libraries }) => {

  const data = state.source.get(state.router.link)
  const issue = state.source[data.type][data.id]
  const posts = state.source.get("/articles")
  const departments = [
    {
      "name": "Features",
      "ID": 383
    },
    {
      "name": "Home",
      "ID": 459
    },
    {
      "name": "The Final Word",
      "ID": 514
    },
    {
      "name": "Alumni",
      "ID": 380
    },
    {
      "name": "Class Notes",
      "ID": 382
    },
    {
      "name": "From the Editor",
      "ID": 398
    },
    {
      "name": "The President's View",
      "ID": 372
    },
    {
      "name": "Your Turn",
      "ID": 385
    },
    {
      "name": "In Memoriam",
      "ID": 592
    }
  ]

  let issue_posts = []

  for(let i = 0; i<posts.length; i++){
    let current = posts[i]
    console.log("current = " + current)
    if (current.acf.article_issue == issue){
      issue_posts.push(current)
    }
  }

  const Html2React = libraries.html2react.Component

  return (
    <>
      <ResponseHeader/>
        <div>
          <ResponseCoverStory/>
            {departments.map((item) =>{
                return(
                  <ArticleDepartmentList key={item.ID} issue_posts={issue_posts} department_name={item.name} department_id={item.ID}/>
                )
              }
            )}
          <RecentIssues/>
        </div>
      <ResponseFooter/>
    </>
  )
}

export default connect(ResponseIssue)
