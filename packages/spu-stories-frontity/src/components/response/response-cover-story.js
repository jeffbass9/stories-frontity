import React from "react"
import { connect, css, styled, Head } from "frontity"
import Link from "@frontity/components/link"
import dayjs from "dayjs"
import parse from "html-react-parser"
import featured_img from "/packages/spu-stories-frontity/src/images/MIKE-11-scaled_1210x580_acf_cropped.jpeg"


const ResponseCoverStory = ({ state, actions}) => {

  const data = state.source.get(state.router.link)
  const issue = state.source[data.type][data.id]


  return(
    <>
      <CoverStory>
        <div>
            <a href="articles/in-all-things.html">
            <h1>In all things, charity</h1>
            <h4>How can we navigate difficult conversations? A Q&A with Associate Professor of Philosophy Matthew Benton</h4>
            <p>By Shelly Ngo - June 23, 2022</p>
            </a>
        </div>
        <div className="featured-img"></div>
      </CoverStory>
    </>
  )
}

export default connect(ResponseCoverStory);

const CoverStory = styled.section`
position: relative;
display: grid;
grid-template-columns: 3fr 3fr;
@media only screen and (max-width: 620px) {
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
  justify-content: center;
  flex-direction: column;
  border-bottom: 1px solid black;
  padding: 30px 120px;
  width: 100%;
  box-sizing: border-box;
  @media only screen and (max-width: 620px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-bottom: 1px solid black;
    padding: 18px;
    transition: 0.5s ease;
  }
  @media only screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-bottom: 1px solid black;
    border-right: 1px solid black;
    padding: 24px 32px;
    width: 100%;
  }
  & h1 {
    font-family: "Sang Bleu Empire Bold", serif;
    font-weight: 700;
    font-size: 60px;
    line-height: 82px;
    display: flex;
    align-items: center;
    color: #000004;
    @media only screen and (max-width: 620px) {
      font-size: 32px;
      line-height: 12px;
    }
  }
  & h4 {
    font-family: "Sang Bleu Empire", serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 37px;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    color: #69757A;
    @media only screen and (max-width: 620px) {
      font-size: 16px;
    }
  }
  & p {
    font-family: "Inter SemiBold", sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-transform: uppercase;
    color: #221E1F;
    @media only screen and (max-width: 620px) {
      font-size: 12px;
    }
  }
}
& div:last-of-type {
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid black;
}
& .featured-img {
  background-image: url(${featured_img});
  padding-bottom: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
`
