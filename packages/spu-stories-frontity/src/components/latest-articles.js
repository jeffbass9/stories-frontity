import React from "react"
import { connect, styled, css } from "frontity"
import Link from "@frontity/components/link"
import article_placeholder from "/packages/spu-stories-frontity/src/images/article-placeholder.jpeg"
import dayjs from "dayjs"
import returnFeaturedImage from "../services/returnFeaturedImage"
import parse from "html-react-parser"

const LatestArticles = ({ state, actions }) => {
  const data = state.source.get(state.router.link)

  return (
    <LatestArticleList>
      <div className="section-header">Latest Articles</div>
      <div className="issue-article-container">
        {data.items.map((item) => {
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
    </LatestArticleList>
  )
}

export default connect(LatestArticles)

const LatestArticleList = styled.section`
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 0 auto;
padding: 0 1em;
gap: 60px;
width: 100%;
max-width: 100%;
box-sizing: border-box;
& .section-header {
  font-family: 'Inter Bold', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 31px;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: black;
  border-bottom: 7px solid black;
  width: 100%;
}

& .issue-article-container {
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  align-items: stretch;

  & .article-card {
    position: relative;
    width: 100%;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    margin-bottom: 48px;
    gap: 24px;
    box-sizing: border-box;
    & .title:hover {
      text-decoration-line: underline;
      text-decoration-thickness: 2px;
      text-decoration-color: #000004;
      text-underline-offset: 4px;
    }
    & .article-image{
      width: 100%;
      height: 250px;
      padding: 0;
      box-sizing: border-box;
      position: relative;
      & img {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  & .text {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-between;
    gap: 8px;

    & .heading-content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0;
      gap: 12px;
      width: 100%;

      & .category {
        font-family: 'Inter SemiBold', sans-serif;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        text-transform: uppercase;
        color: $color-gray;
        width: 100%;
      }

      & .title {
        font-family: 'Inter SemiBold', sans-serif;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #3E2B2E;
        width: 100%;
      }
    }

    & .date {
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #221E1F;
      width: 100%;
    }
  }
}


@media only screen and (max-width: 744px) {
  .body-section {
    padding: 0 16px;
    gap: 32px;
  }
}

@media only screen and (min-width: 1280px) {
  .issue-article-container {
    & .article-card:nth-of-type(4n+1) {
      flex: 0 0 25%;
      padding: 0 24px 0 0;
    }

    & .article-card:nth-of-type(4n+2) {
      flex: 0 0 25%;
      padding: 0 24px;
      box-shadow: -0.5px 0 0 0 black;
    }

    & .article-card:nth-of-type(4n+3) {
      flex: 0 0 25%;
      padding: 0 24px;
      box-shadow: -0.5px 0 0 0 black;
    }

    & .article-card:nth-of-type(4n) {
      flex: 0 0 25%;
      padding: 0 0 0 24px;
      box-shadow: -0.5px 0 0 0 black;
    }
  }
}

@media only screen and (max-width: 1279px) and (min-width: 744px) {
  padding: 0 32px;
  gap: 32px;
  .issue-article-container {
    & .article-card:nth-of-type(2n+1) {
      flex: 0 0 50%;
      padding: 0 32px 0 0;
      margin-bottom: 16px;
    }
    & .article-card:nth-of-type(2n) {
      flex: 0 0 50%;
      margin-bottom: 16px;
    }
  }
}
`
