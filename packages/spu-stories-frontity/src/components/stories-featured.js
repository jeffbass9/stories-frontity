import React from "react"
import { connect, css, styled, Head } from "frontity"
import Link from "@frontity/components/link"
import article_placeholder from "/packages/spu-stories-frontity/src/images/article-placeholder.jpeg"
import response_placeholder from "/packages/spu-stories-frontity/src/images/response-cover-placeholder.jpg"
import featured_article_placeholder from "/packages/spu-stories-frontity/src/images/featured-article-placeholder.jpg"

const StoriesFeatured = ({ state, actions}) => {
  //const data = state.source.get(state.source.homepage)
  // const data = state.source.get("/homepage")
  const homepage = state.source.page[46]
  console.log(homepage)
  return(
    <>
      <FeaturedContainer>
        <div>
            <div className="stories-featured-img"><img src={featured_article_placeholder}/></div>
            <div className="featured-article">
                <a href="#">
                    <h1>Designing a fair-trade fashion company</h1>
                    <h4>What was it like to walk down the runway as a “designer to watch” at New York Fashion Week (NYFW) in September?</h4>
                    <p>By Lee Fleisher - October 27, 2022</p>
                </a>
            </div>
        </div>
        <div>
            <div className="popular-article-sec">
                <div className="popular-header">
                    <div className="featured-section-header">Popular Articles</div>
                    <a className="popular-view-more" href="#">View More</a>
                </div>
                <div className="popular-column">
                    <a className="popular-article-card" href="#">
                        <div><img src={article_placeholder}/></div>
                        <div className="text">
                            <div className="heading-content">
                                <div className="category">How To</div>
                                <div className="title">FAQ: What do I need to know about transferring to SPU?</div>
                            </div>
                            <div className="date">February 2023</div>
                        </div>
                    </a>
                    <a className="popular-article-card" href="#">
                        <div><img src={article_placeholder}/></div>
                        <div className="text">
                            <div className="heading-content">
                                <div className="category">How To</div>
                                <div className="title">How to pay for tuition: a monthly breakdown</div>
                            </div>
                            <div className="date">February 2023</div>
                        </div>
                    </a>
                    <a className="popular-article-card" href="#">
                        <div><img src={article_placeholder}/></div>
                        <div className="text">
                            <div className="heading-content">
                                <div className="category">Student Life</div>
                                <div className="title">Three outdoor adventures in the Seattle area</div>
                            </div>
                            <div className="date">January 2023</div>
                        </div>
                    </a>
                </div>
            </div>
            <div className="response-latest-sec">
                <div className="featured-section-header">Response Latest Issue</div>
                <a className="response-latest-row" href="#">
                    <div className="response-latest-cover"><img src={response_placeholder}/></div>
                    <div className="text">
                        <div className="header">Faith & Work</div>
                        <div className="season">Fall/Winter 2022</div>
                    </div>
                </a>
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
    h4 {
      font-family: "Sang Bleu Empire", serif;
      font-weight: 400;
      font-size: 20px;
      line-height: 37px;
      display: flex;
      align-items: center;
      text-transform: capitalize;
      color: #69757A;
      @media only screen and (max-width: 1024px) {
        font-size: 24px;
      }
    }
    p {
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
