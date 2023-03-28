import React from "react"
import { connect, css, styled, Head } from "frontity"
import Link from "@frontity/components/link"
import dayjs from "dayjs"
import returnFeaturedImage from "../../services/returnFeaturedImage"
import parse from "html-react-parser"
import article_placeholder from "/packages/spu-stories-frontity/src/images/article-placeholder.jpeg"
import response_placeholder from "/packages/spu-stories-frontity/src/images/response-cover-placeholder.jpg"
import featured_article_placeholder from "/packages/spu-stories-frontity/src/images/featured-article-placeholder.jpg"

const StoriesFeatured = ({ state, actions}) => {

  const homepage = state.source.page[46]
  const homepage_featured = homepage.acf.featured_article.ID
  const featured_post = state.source.article[homepage_featured]
  const featured_formatted_date = dayjs(featured_post.date).format("MMMM D, YYYY")
  const featured_author = state.source.author[featured_post.post_author]
  const response_issues = state.source.get("/response-issues").items
  let featured_img

  if(featured_post.acf.article_full_hero){
    featured_img = featured_post.acf.article_full_hero
  }else{
    featured_img = state.source.attachment[featured_post.featured_media].source_url
  }

  const popular_articles = homepage.acf.popular_articles
  const latest_response_id = response_issues[0].id
  const latest_response = state.source.response_issue[latest_response_id]

  return(
    <>
      <FeaturedContainer>
        <div>
            <div className="stories-featured-img">
              <img src={featured_img}/>
            </div>
            <div className="featured-article">
                <Link link={featured_post.link}>
                  <h1>{parse(featured_post.title.rendered)}</h1>
                  {parse(featured_post.excerpt.rendered)}
                  <p>By Julia Siemens - {featured_formatted_date}</p>
                </Link>
            </div>
        </div>


        <div>
            <div className="popular-article-sec">
                <div className="popular-header">
                    <div className="featured-section-header">Popular Articles</div>
                    <Link link={"/articles"} className="popular-view-more">View More</Link>
                </div>
                <div className="popular-column">
                    {popular_articles.map((item) => {
                      let post_topic = ""
                      const formatted_date = dayjs(item.post_date).format("MMMM YYYY")
                      const post = state.source[item.post_type][item.ID]
                      let featured_img = post.acf.article_full_hero
                      let category = ""

                      return (
                        <Link key={item.ID} link={post.link} className="popular-article-card">
                          <div className="article-image">
                            <img src={featured_img}/>
                          </div>
                          <div className="text">
                              <div className="heading-content">
                                  <div className="category">{category}</div>
                                  <div className="title">{item.post_title}</div>
                              </div>
                              <div className="date">{formatted_date}</div>
                          </div>
                          <br />
                        </Link>
                      )
                    })}
                </div>
            </div>
            <div className="response-latest-sec">
                <div className="featured-section-header">Response Latest Issue</div>
                <Link link={latest_response.link} className="response-latest-row">
                  <div className="response-latest-cover"><img src={latest_response.acf.response_cover}/></div>
                  <div className="text">
                      <div className="header">{parse(latest_response.title.rendered)}</div>
                      <div className="season">{latest_response.acf.response_issue_number}</div>
                  </div>
                </Link>
            </div>

        </div>
    </FeaturedContainer>
    </>
  )
}

export default connect(StoriesFeatured);

const FeaturedContainer = styled.section`
display: grid;
grid-template-columns: 3fr 3fr;
@media only screen and (max-width: 1024px) {
  display: grid;
  grid-template-columns: 6fr;
}
& a:hover {
  text-decoration-line: underline;
  text-decoration-thickness: 2px;
  text-decoration-color: #000004;
  text-underline-offset: 4px;
}
& div:first-of-type {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 32px;
  width: 100%;
  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0;
    transition: 0.5s ease;
  }
  & .stories-featured-img {
    width: 100%;
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    & img {
      width: 100%;
      aspect-ratio: 1/1;
      object-fit: cover;
    }
  }
  & .featured-content {
    @media only screen and (max-width: 1024px) {
      padding: 0;
    }
  }
  & .featured-article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 0 32px 33px;
    gap: 16px;
    @media only screen and (max-width: 1024px) {
      padding: 0 0 16px 16px;
    }
    h1 {
      font-family: "Sang Bleu Empire Bold", serif;
      font-weight: 700;
      font-size: 60px;
      line-height: 82px;
      display: flex;
      align-items: center;
      color: #000004;
      @media only screen and (max-width: 1024px) {
        font-size: 52px;
        margin-top: 0;
      }
    }
    p:nth-of-type(1) {
      font-family: "Sang Bleu Empire", serif;
      font-weight: 400;
      font-size: 20px;
      line-height: 37px;
      display: flex;
      align-items: center;
      color: #69757A;
      @media only screen and (max-width: 1024px) {
        font-size: 24px;
      }
    }
    p:nth-of-type(2) {
      font-family: "Inter SemiBold", sans-serif;
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
      text-transform: uppercase;
      color: #221E1F;
      @media only screen and (max-width: 1024px){
        font-size: 20px;
      }
    }
  }
}
& div:last-of-type {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 36px;
  gap: 32px;
  @media only screen and (max-width: 1024px) {
    padding: 12px 18px;
  }
  & .response-latest-sec {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    margin: 0;
    gap: 24px;
    width: 100%;
    & .response-latest-row {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 0;
      margin: 0;
      gap: 16px;
      width: 100%;
      & .text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0;
        margin: 0;
        gap: 4px;
        & .header {
          font-family: "Inter SemiBold", sans-serif;
          font-weight: 700;
          font-size: 24px;
          line-height: 39px;
          padding: 0;
          color: #000000;
          width: 100%;
          margin: 0;
          letter-spacing: 0.06em;
          text-transform: capitalize;
        }
        & .season {
          font-family: 'Inter', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 29px;
          letter-spacing: 0.02em;
          color: #000000;
          width: 100%;
          margin: 0;
          padding: 0;
          text-transform: capitalize;
        }
      }
      & .response-latest-cover{
        width: 30%;
        img {
          display: block;
          background-repeat: no-repeat;
          background-size: cover;
          height: auto;
          width: 100%;
          object-fit: cover;
        }
      }
    }
  }
  & .featured-section-header {
    width: -moz-fit-content;
    width: fit-content;
    padding-top: 6px;
    padding-left: 0;
    padding-right: 0;
    margin: 0;
    border-top: 8px solid #000000;
    font-family: "Inter Bold", sans-serif;
    font-weight: 700;
    font-size: 20px;
    line-height: 31px;
    letter-spacing: 0.35em;
    text-transform: uppercase;
    color: black;
  }
  & .popular-article-sec {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    margin-top: 48px;
    gap: 24px;
    @media only screen and (max-width: 1024px) {
      margin-top: 24px;
    }
    & .popular-column {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0;
      gap: 24px;
      margin: 0;
      & .popular-article-card {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        padding: 0 0 24px;
        border-bottom: 0.5px solid #858585;
        flex: none;
        order: 0;
        align-self: stretch;
        flex-grow: 0;
        margin: 0;
        & div {
          width: 48%;
          padding: 0;
          box-sizing: border-box;
          position: relative;
          & img {
            display: block;
            background-repeat: no-repeat;
            background-position: 50%;
            background-size: cover;
            width: 100%;
            height: auto;
            object-fit: cover;
          }
        }
        & .text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0;
          gap: 16px;
          margin: 0;
          & .date {
            font-family: "Inter", sans-serif;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #221E1F;
            width: 100%;
            padding: 0;
            margin: 0;
          }
          & .heading-content {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 0;
            gap: 8px;
            width: 100%;
            & .category {
              font-family: "Inter SemiBold", sans-serif;
              font-weight: 700;
              font-size: 16px;
              line-height: 20px;
              text-transform: uppercase;
              color: #5C5C5C;
              width: 100%;
            }
            & .title {
              font-family: "Inter SemiBold", sans-serif;
              font-weight: 700;
              font-size: 24px;
              line-height: 31px;
              padding: 0;
              color: #3E2B2E;
              width: 100%;
              margin: 0;
            }
          }
        }
      }
    }
  }
  & .popular-header {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0;
    & .popular-view-more {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      padding: 0;
      margin: 0;
      flex: none;
      order: 1;
      align-self: stretch;
      flex-grow: 1;
      font-family: "Inter", sans-serif;
      font-size: 16px;
      line-height: 28px;
      letter-spacing: 0.05em;
      text-transform: capitalize;
      color: #5C5C5C;
    }
  }
}
}
`
