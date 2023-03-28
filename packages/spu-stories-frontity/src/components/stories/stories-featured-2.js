import React from "react"
import { connect, css, styled, Head } from "frontity"
import Link from "@frontity/components/link"
import background_img from "../../images/karen-springs-hero_1210x580_acf_cropped.jpg"
import parse from "html-react-parser"
import dayjs from "dayjs"

const StoriesFeatured2 = ({ state, actions}) => {

  const homepage = state.source.page[46]
  const homepage_featured_2 = homepage.acf.featured_article_2.ID
  const featured_post = state.source.article[homepage_featured_2]
  const formatted_date = dayjs(featured_post.date).format("MMMM YYYY")
  const featured_author = state.source.author[featured_post.post_author]
  


  return(
    <>
      <FeaturedContainer>
        <Link link={featured_post.link} className="second-featured-article">
           <div className="description">
               <div className="title">{parse(featured_post.title.rendered)}</div>
               <div className="date">{formatted_date}</div>
           </div>
        </Link>
      </FeaturedContainer>
    </>
  )
}

export default connect(StoriesFeatured2);

const FeaturedContainer = styled.section`
display: flex;
flex-direction: column;
justify-content: space-around;
width: 100%;
height: 512px;
background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${background_img});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
position: relative;

& .description {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2em;
  gap: 36px;
  & .title {
    padding-right: 128px;
    font-family: 'SangBleu Empire', serif;
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 71px;
    letter-spacing: 0.05em;
    color: #FFFFFF;
  }
  & .date {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 27px;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    color: #FFFFFF;
    width: 100%;
  }
}

`
