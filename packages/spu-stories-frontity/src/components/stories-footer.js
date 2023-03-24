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
import FooterContainer from "../components/styles/footer-container"

const StoriesFooter = ({ state, actions, props }) => {
  const footer_items = state.source.get('/menu/footer-menu-2023/').items;
  return(
    <>
      <FooterContainer>
          <div className="footer-wrapper">
              <h3>Response <span className="footer-magazine">Magazine</span></h3>
              <div className="footer-items-container">
                {footer_items.map((item) => {
                  return(
                    <div key={item.ID} className="footer-items-wrapper">
                      <Link link={item.url}>{item.title}</Link>
                    </div>
                  );
                })}
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

export default connect(StoriesFooter)
