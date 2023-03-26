import React from "react"
import { connect, css, styled, Head } from "frontity"
import Link from "@frontity/components/link"
import SearchButton from "../components/search/search-button";
import SearchModal from "../components/search/search-modal";
import stories_logo from "/packages/spu-stories-frontity/src/images/spu-stories-logo.svg"
import response_logo from "/packages/spu-stories-frontity/src/images/response-logo.svg"
import ResponseHeader from "../components/response-header"
import StoriesHeader from "../components/stories-header"

const Header = ({ state, actions, props}) => {

  const data = state.source.get(state.router.link)

  if(data){
    const post = state.source[data.type][data.id]
    if(post){
      let response_department = post["response-department"]
      let page_template = post.template
      if(response_department || page_template == "contact-page-template.php"){
        return(
          <ResponseHeader/>
        )
      }else{
        return(
          <StoriesHeader/>
        )
      }
    }
    else{
      return(
        <StoriesHeader/>
      )
    }
  }else{
    return(
      <StoriesHeader/>
    )
  }

}

export default connect(Header)
