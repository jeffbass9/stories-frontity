import React, {Component, useEffect, useState } from 'react';
import { connect, styled, css } from "frontity"
import Link from "@frontity/components/link"
import article_placeholder from "/packages/spu-stories-frontity/src/images/article-placeholder.jpeg"
import dayjs from "dayjs"
import returnFeaturedImage from "../../services/returnFeaturedImage"
import parse from "html-react-parser"

import ArticleList from "../../components/styles/article-list"

const ArticleDepartmentList = ({ state, actions, props }) => {

  const department = props.department
  const articles = props.articles

  return (
    <ArticleList>
      <div className="section-header">{department}</div>
      <div className="issue-article-container">
        {articles.map((article) => {
          let featured_img = article_placeholder
          let post_topic = ""

          if(state.source.attachment[article.featured_media]){
            featured_img = state.source.attachment[article.featured_media].source_url
          }else{
            featured_img = article.acf.article_full_hero
          }

          const formatted_date = dayjs(article.date).format("MMMM YYYY")

          return (
            <Link key={article.id} link={article.link} className="article-card">
            <div className="article-image">
            <img src={featured_img}/>
            </div>
              <div className="text">
                  <div className="heading-content">
                      <div className="category">{post_topic}</div>
                      <div className="title">{parse(article.title.rendered)}</div>
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
