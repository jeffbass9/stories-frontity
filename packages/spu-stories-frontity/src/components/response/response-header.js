import React from "react"
import { connect, Global, css, styled, Head } from "frontity"
import Link from "@frontity/components/link"
import SearchButton from "../../components/search/search-button";
import SearchModal from "../../components/search/search-modal";
import stories_logo from "/packages/spu-stories-frontity/src/images/spu-stories-logo.svg"
import response_logo from "/packages/spu-stories-frontity/src/images/response-logo.svg"
import spu_home_logo from "/packages/spu-stories-frontity/src/images/spu-home.svg"
import HeaderContainer from "../../components/styles/header-container"
import Menu from "../../components/styles/menu"
import TopNav from "../../components/styles/top-nav"
import Hamburger from "../../components/styles/hamburger"
import SearchTool from "../../components/styles/searchtool"

const ResponseHeader = ({ state, actions, props}) => {
  const menu_items = state.source.get('/menu/response-header-menu-2023/').items;

  return(
    <>
      <HeaderContainer>

          <TopNav>
            <div className="top-nav-right">
              <Link link="/about-response">
                <img src={spu_home_logo} className="top-nav-right__response" alt="Response Magazine Logo"/>
              </Link>
              <SearchTool>
                <SearchButton/>
              </SearchTool>
            </div>
            <div className="top-nav-centered">
              <Link link="/about-response">
                Response
              </Link>
            </div>
            <div className="top-nav-left stories-hide-on-mobile">
              <Link link="/">
                <img src={stories_logo} className="top-nav-left__logo" alt="SPU Stories"/>
              </Link>
            </div>
            <input name="toggle" type="checkbox" css={hamburger_trigger}/>
            <Hamburger htmlFor="toggle">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </Hamburger>
            <Menu>
              {menu_items.map((item) => {
                return(
                  <Link key={item.ID} link={item.url}>{item.title}</Link>
                );
              })}
            </Menu>
          </TopNav>

      </HeaderContainer>
      <SearchModal />
    </>
  )
}

export default connect(ResponseHeader)

const hamburger_trigger = css({
  "display": "inline-block",
  "width": "20px",
  "height": "20px",
  "position": "relative",
  "margin": "16px",
  "cursor": "pointer",
  "opacity": "0",
  "z-index": "4",
  "-webkit-touch-callout": "none",
  "@media screen and (min-width: 1024px)":{
    "display": "none"
  },
  "&:checked ~ nav":{
    "left": "0"
  }
})
