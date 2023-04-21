import React, {Component, useEffect, useState } from 'react';
import { connect, styled, css } from "frontity"
import Link from "@frontity/components/link"
import article_placeholder from "/packages/spu-stories-frontity/src/images/article-placeholder.jpeg"
import dayjs from "dayjs"
import returnFeaturedImage from "../../services/returnFeaturedImage"
import parse from "html-react-parser"
import ArticleList from "../../components/styles/article-list"

const ArticleDepartmentList = ({ state, actions, issue_posts, department_id, department_name }) => {

  const department = department_id
  const posts = issue_posts

  let dept_posts = []

  for(let i = 0; i<posts.length; i++){
    let current = posts[i]
    let current_depts = current["response-department"]
    console.table(current_depts)
    for(let j=0; j<current_depts.length; j++){
      if (current["response-department"][j] == department){
        dept_posts.push(current)
      }
    }
  }

  console.log("dept_posts:" + dept_posts);

  return (
    <ArticleList>
      <div className="section-header">{department_name}</div>
      <div className="issue-article-container">
        {dept_posts.map((post) => {
          let featured_img = article_placeholder
          let post_topic = ""

          if(state.source.attachment[post.featured_media]){
            featured_img = state.source.attachment[post.featured_media].source_url
          }else{
            featured_img = post.acf.article_full_hero
          }

          const formatted_date = dayjs(post.date).format("MMMM YYYY")

          return (
            <Link key={post.id} link={post.link} className="article-card">
            <div className="article-image">
            <img src={featured_img}/>
            </div>
              <div className="text">
                  <div className="heading-content">
                      <div className="category">{post_topic}</div>
                      <div className="title">{parse(post.title.rendered)}</div>
                  </div>
                  <div className="date">{formatted_date}</div>
              </div>
              <br />
            </Link>
          )
        })}
      </div>
    </ArticleList>
  )
}

export default connect(ArticleDepartmentList)
