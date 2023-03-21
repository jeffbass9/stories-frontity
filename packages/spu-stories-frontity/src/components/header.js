import React from "react"
import { connect, css, styled, Head } from "frontity"
import Link from "@frontity/components/link"
import SearchButton from "../components/search/search-button";
import SearchModal from "../components/search/search-modal";
import stories_logo from "/packages/spu-stories-frontity/src/images/spu-stories-logo.svg"
import response_logo from "/packages/spu-stories-frontity/src/images/response-logo.svg"

const Header = ({ state, actions}) => {
  const menu_items = state.source.get('/menu/header-menu-2023/').items;
  
  return(
    <>
      <HeaderContainer>

          <TopNav>
            <div className="top-nav-right">
              <Link link="/about-response">
                <img src={response_logo} className="top-nav-right__response" alt="Response Magazine Logo"/>
              </Link>
              <SearchTool>
                <SearchButton/>
              </SearchTool>
            </div>
            <div className="top-nav-left">
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

export default connect(Header)

const HeaderContainer = styled.header`
display: block;
position: fixed;
top: 0;
left: 0;
min-height: 36px;
width: 100%;
background-color: white;
border: 1px solid black;
z-index: 9000;
& .nav{
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  width: 100%;
  z-index: 100;
}
input:checked ~ nav {
  left: -1px;
}
@media screen and (max-width: 1024px){
  display: inline-block;
}
input:checked + label span:nth-of-type(1) {
  top: 7px;
  width: 0;
  left: 50%;
}
input:checked + label span:nth-of-type(2) {
  transform: rotate(45deg);
}
input:checked + label span:nth-of-type(3) {
  transform: rotate(-45deg);
}
input:checked + label span:nth-of-type(4) {
  top: 7px;
  width: 0;
  left: 50%;
}
`

const Menu = styled.nav`
position: absolute;
width: 100%;
padding-top: 61px;
list-style-type: none;
left: -101%;
-webkit-transition: left 0.3s ease;
-o-transition: left 0.3s ease;
transition: left 0.3s ease;
box-sizing: border-box;
text-align: center;
a{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 36px;
  background-color: white;
  border: 1px solid black;
  line-height: 18px;
  text-decoration: none;
  text-transform: uppercase;
  color: #5C5C5C;
  font-family: "Inter SemiBold", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  margin: auto;
  width: 100%;
  &:hover:not(.active) {
    background-color: #872937;
    color: white;
  }
}

@media (min-width: 1024px) {
  position: relative;
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  left: 0;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-left: none;
  }
}

`

const TopNav = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
position: relative;
& .top-nav-right {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em 1em;
  @media screen and (min-width: 1024px){
    padding: 1em;
  }
  &__response{
    display: none;
    @media screen and (min-width: 1024px){
      display: inline-block;
      width: 120px;
      height: auto;
    }
  }
}
& .top-nav-left{
  padding: 0.5em 1em;
  @media screen and (min-width: 1024px){
    padding: 1em;
  }
}
@media screen and (min-width: 1024px){
  flex-direction: row-reverse;
}`

const SearchTool = styled.div`
`

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

const Hamburger = styled.label`
display: block;
position: absolute;
top: 0;
right: 0;
height: 20px;
width: 20px;
margin: 16px;
background: transparent;
border: 0;
cursor: pointer;
z-index: 3;
span {
  display: block;
  position: absolute;
  height: 2px;
  width: 100%;
  background: black;
  border-radius: 2px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
}
span:nth-of-type(1) {
  top: 0;
}
span:nth-of-type(2) {
  top: 7px;
}
span:nth-of-type(3) {
  top: 7px;
}
span:nth-of-type(4) {
  top: 14px;
}

@media screen and (min-width: 1024px){
  display: none;
}
`
