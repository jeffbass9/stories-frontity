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
import ResponseFooter from "../components/response-footer"
import StoriesFooter from "../components/stories-footer"

const Footer = ({ state, actions }) => {

  const data = state.source.get(state.router.link)

  if(data){
    const post = state.source[data.type][data.id]
    if(post){
      let response_department = post["response-department"]
      let page_template = post.template
      if(response_department || page_template == "contact-page-template.php"){
        return(
          <ResponseFooter/>
        )
      }else{
        return(
          <StoriesFooter/>
        )
      }
    }
    else{
      return(
        <StoriesFooter/>
      )
    }
  }else{
    return(
      <StoriesFooter/>
    )
  }

}

export default connect(Footer)
