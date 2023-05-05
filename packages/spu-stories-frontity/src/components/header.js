import { useEffect, React } from "react"
import { connect, css, styled, Head } from "frontity"
import Link from "@frontity/components/link"
import SearchButton from "../components/search/search-button";
import SearchModal from "../components/search/search-modal";
import stories_logo from "/packages/spu-stories-frontity/src/images/spu-stories-logo.svg"
import response_logo from "/packages/spu-stories-frontity/src/images/response-logo.svg"
import ResponseHeader from "../components/response/response-header"
import StoriesHeader from "../components/stories/stories-header"


const Header = ({ state, actions, props}) => {
  if(state.router.link == "/about-response/"){
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
