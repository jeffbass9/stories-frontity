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
  const post = state.source[data.type][data.id]
  const response_department = post["response-department"]
  const page_template = post.template

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

export default connect(Header)
