import React from "react"
import { connect, styled, css } from "frontity"
import Link from "@frontity/components/link"
import article_placeholder from "/packages/spu-stories-frontity/src/images/article-placeholder.jpeg"
import dayjs from "dayjs"
import returnFeaturedImage from "../services/returnFeaturedImage"
import parse from "html-react-parser"
import ArticleList from "../components/styles/article-list"

const LatestArticles = ({ state, actions }) => {
  const data = state.source.get(state.router.link)

  const articles = []
  for(let i = 0; i<8; i++){
    articles.push(data.items[i])
  }

  return (
    <ArticleList>
      <div className="section-header">Latest Articles</div>
      <div className="issue-article-container">
        {articles.map((item) => {
          const post = state.source[item.type][item.id]
          let featured_img = article_placeholder
          let post_topic = ""

          if(state.source.attachment[post.featured_media]){
            featured_img = state.source.attachment[post.featured_media].source_url
          }else{
            featured_img = post.acf.article_full_hero
          }

          const formatted_date = dayjs(post.date).format("MMMM YYYY")

          return (
            <Link key={item.id} link={post.link} className="article-card">
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

export default connect(LatestArticles)
