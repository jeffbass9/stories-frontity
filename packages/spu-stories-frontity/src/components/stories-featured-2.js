import React from "react"
import { connect, css, styled, Head } from "frontity"
import Link from "@frontity/components/link"
import background_img from "../images/karen-springs-hero_1210x580_acf_cropped.jpg"

const StoriesFeatured2 = ({ state, actions}) => {
  return(
    <>
      <FeaturedContainer>
        <a className="second-featured-article" href="#">
           <div className="description">
               <div className="title">
                Answering God’s call to serve Ukrainian orphans
                </div>
               <div className="date">December 2022</div>
           </div>
        </a>
      </FeaturedContainer>
    </>
  )
}

export default connect(StoriesFeatured2);

const FeaturedContainer = styled.section`
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-start;
padding: 32px 120px;
gap: 37px;
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
  padding: 0;
  gap: 36px;
  position: absolute;
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
