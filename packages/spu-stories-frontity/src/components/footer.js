import React from "react"
import { connect, css, styled} from "frontity"
import Link from "@frontity/components/link"
import facebook_icon from "/packages/spu-stories-frontity/src/images/icon--facebook.svg"
import twitter_icon from "/packages/spu-stories-frontity/src/images/icon--twitter.svg"
import instagram_icon from "/packages/spu-stories-frontity/src/images/icon--instagram.svg"
import youtube_icon from "/packages/spu-stories-frontity/src/images/icon--youtube.svg"
import linkedin_icon from "/packages/spu-stories-frontity/src/images/icon--linkedin.svg"
import tiktok_icon from "/packages/spu-stories-frontity/src/images/icon--tiktok.svg"
import footer_background from "/packages/spu-stories-frontity/src/images/SPU_Main_LoRes_1210x580_acf_cropped.jpeg"

const Footer = ({ state, actions }) => {
  return(
    <>
      <FooterContainer>
          <div className="footer-wrapper">
              <h3>Response <span className="footer-magazine">Magazine</span></h3>
              <div className="footer-items-container">
                  <div className="footer-items-wrapper">
                      <Link className="text" link="manage-subscription.html">Manage your subscription</Link>
                  </div>
                  <div className="footer-items-wrapper">
                      <Link className="text" link="contact.html">contact us</Link>
                  </div>
                  <div className="footer-items-wrapper">
                      <Link className="text" link="about-us.html">about response</Link>
                  </div>
                  <div className="footer-items-wrapper">
                      <Link className="text" link="manage-subscription.html">visit spu</Link>
                  </div>
                  <div className="footer-items-wrapper">
                      <Link className="text" link="manage-subscription.html">become a student</Link>
                  </div>
                  <div className="footer-items-wrapper">
                      <Link className="text" link="manage-subscription.html">submit a story idea</Link>
                  </div>
              </div>
              <div className="social-media-container">
                  <img src={facebook_icon}/>
                  <img src={twitter_icon}/>
                  <img src={instagram_icon}/>
                  <img src={youtube_icon}/>
                  <img src={linkedin_icon}/>
                  <img src={tiktok_icon}/>
              </div>
              <div className="copyright">© 2022 Seattle Pacific University</div>
          </div>
          <div className="footer-image">
              <img src={footer_background}/>
          </div>
      </FooterContainer>
    </>
  )


}

export default connect(Footer)


const FooterContainer = styled.footer`
  display: block;
  height: auto;
  width: 100%;
  position: absolute;
  object-position: center bottom;
  bottom: 0;
  padding-left: calc(50vw - 4rem);
  @media only screen and (max-width: 1024px) {
    padding-left: 1.25rem;
  }
  & .footer-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: white;
    box-shadow: -4px -4px 25px rgba(0, 0, 0, 0.16);
    padding: 30px 40px;
    position: relative;
    float: right;
    width: 100%;
    right: 0;
    top: -4rem;
    gap: 18px;
    z-index: 2;
    & h3 {
      font-family: "Sang Bleu Empire Bold", serif;
      font-weight: 700;
      font-size: 54px;
      line-height: 88px;
      text-transform: capitalize;
      color: black;
      @media only screen and (max-width: 620px) {
        font-size: 40px;
        line-height: 48px;
      }
    }
    & .copyright {
      font-family: "Inter", sans-serif;
      font-size: 15px;
      line-height: 19px;
      display: flex;
      align-items: center;
      letter-spacing: 0.05em;
      text-transform: capitalize;
      color: black;
    }
    & .social-media-container {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 0;
      gap: 16px;
      width: 100%;
      & img {
        width: 32px;
        height: 32px;
      }
    }
    & .footer-items-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0;
      width: 100%;
      gap: 15px;
      & .footer-items-wrapper {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 15px 0;
        border-top: 1.5px solid black;
        width: 100%;
        &:hover:not(.active) {
          border-top: 1.5px solid #872937;
        }
        & .text {
          font-family: "Inter SemiBold", sans-serif;
          font-weight: 700;
          font-size: 25px;
          line-height: 31px;
          display: flex;
          align-items: center;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          width: 100%;
          color: black;
          &:hover:not(.active) {
            color: #872937;
          }
          @media only screen and (max-width: 620px) {
            font-size: 16px;
            line-height: 12px;
          }
        }
      }
    }
  }
  .footer-image img {
    display: block;
    width: 100%;
    background-repeat: no-repeat;
    object-fit: cover;
    object-position: center top;
    position: absolute;
    right: 0;
    height: 670px;
    top: 17.79%;
    z-index: 1;
  }
  .footer-magazine {
    font-size: 30px;
    text-transform: capitalize;
    color: black;
    font-style: normal;
    font-weight: 400;
    @media only screen and (max-width: 620px) {
      font-size: 24px;
    }
  }
`
