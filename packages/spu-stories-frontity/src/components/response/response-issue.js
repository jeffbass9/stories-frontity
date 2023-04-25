import React, {Component, useEffect, useState } from 'react';
import ResponseCoverStory from "../../components/response/response-cover-story"
import ResponseHeader from "../../components/response/response-header"
import ResponseFooter from "../../components/response/response-footer"
import ArticleDepartmentList from "../../components/response/article-department-list"
import RecentIssues from "../../components/response/recent-issues"
import { connect, Head } from "frontity"


const ResponseIssue = ({ state, libraries }) => {

  const data = state.source.get(state.router.link)
  const issue = data.id
  const articles_data = state.source.get("/articles")
  let articles = articles_data.items
  let issue_posts = []

  if(articles.length > 0){
    for(let i = 0; i<articles.length; i++){
      let current = articles[i]
      let full = state.source[current.type][current.id]
      if (full.acf.article_issue == issue){
        issue_posts.push(full)
      }
    }
  }

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
