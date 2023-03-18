import React from "react"
import { connect, css, styled, Head } from "frontity"
import Link from "@frontity/components/link"
import search_icon from "/packages/spu-stories-frontity/src/images/icon-search-36px.svg"
import stories_logo from "/packages/spu-stories-frontity/src/images/spu-stories-logo.svg"
import response_logo from "/packages/spu-stories-frontity/src/images/response-logo.svg"

const Header = ({ state, actions}) => {
  return(
    <>
      <HeaderContainer>
          <SearchTool>
            <img src={search_icon} alt="Search"/>
          </SearchTool>

          <TopNav>
            <div className="top-nav-left">
              <Link link="spu-stories.html">
                <img src={stories_logo} className="top-nav-left__logo" alt="SPU Stories"/>
              </Link>
            </div>
            <div className="top-nav-right">
              <Link link="https://stories.spu.edu/topic/response-magazine/">
                <img src={response_logo} className="top-nav-right__response" alt="Response Magazine Logo"/>
              </Link>
              <img src={search_icon} className="top-nav-right__search" alt="Search"/>
            </div>
          </TopNav>

          <Menu>
            <Link link="/">Campus News</Link>
            <Link link="/">Alumni News</Link>
            <Link link="/">Features</Link>
            <Link link="/">Reflections</Link>
            <Link link="/">Life at SPU</Link>
            <Link link="/">Departments</Link>
          </Menu>
          <Hamburger>
              <div>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
              </div>
          </Hamburger>
      </HeaderContainer>
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
& #hamburger {
  display: none;
}

@media screen and (max-width: 1024px){
  display: inline-block;
}
& .response-link{
  @media (max-width: 1024px) {
    display: 'flex'
    justify-content: 'center'
    align-items: 'center'
    text-transform: 'uppercase'
    text-align: 'center'
    text-decoration: 'none'
    position: 'relative'
    height: '50px'
  }
  display: 'none'
  justify-content: 'center'
  text-transform: 'uppercase'
  text-align: 'center'
  text-decoration: 'none'
  position: 'relative'
  color: 'black'
  font-family: 'Sang Bleu Empire Bold', 'serif'
  font-weight: '550'
  font-size: '30px'
  text-transform: 'uppercase'
  margin: 'auto'
  &:hover:not(.active) {
    color: '#872937'
  }
}
`

const Menu = styled.nav`
  @media (max-width: 1024px) {
    display: block;
    position: fixed;
    top: -100%;
    left: 0;
    width: 100%;
    z-index: 100;
    transition: 0.5s ease;
    &.open {
      top: 50px;
    }
  }
  display: flex;
  flex-direction: row;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 36px;
    background-color: white;
    border: 1px solid black;
    border-left: none;
    line-height: 18px;
    text-decoration: none;
    text-transform: uppercase;
    color: #5C5C5C;
    font-family: "Inter SemiBold", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    margin: auto;
    &:hover:not(.active) {
      background-color: #872937;
      color: white;
    }
  }
`

const MobileMenu = styled.nav`
color: #5C5C5C;
font-family: "Inter SemiBold",sans-serif;
font-style: normal;
font-weight: 700;
font-size: 16px;
margin: auto;
&:hover:not(.active){
  background-color: #872937;
  color: white;
}
@media screen and (max-width: 1024px){
  display: none;
}
a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 36px;
  background-color: white;
  border: 1px solid black;
  border-left: none;
  line-height: 18px;
  text-decoration: none;
  text-transform: uppercase;
  color: #5C5C5C;
  font-family: "Inter SemiBold", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  margin: auto;
  &:hover:not(.active) {
    background-color: #872937;
    color: white;
  }
}`

const TopNav = styled.div`
@media (max-width: 1024px) {
  display: none;
}
position: relative;
overflow: hidden;
padding: 12px 32px;
& .top-nav-left{
  float: left;
}
& .top-nav-centered{
  float: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  & .response-nav{
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    text-align: center;
    text-decoration: none;
    position: relative;
  }
}
& .top-nav-right {
  float: right;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  &__response{
    width: 120px;
    height: auto;
  }
  &__search{
    margin-left: 12px;
  }
}`

const SearchTool = styled.div`
  @media (max-width: 1024px) {
    float: left;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 50px;
    margin: 0;
  }
  display: none;
  & img {
    margin-left: 12px;
    @media (max-width: 1024px) {
      float: none;
      position: absolute;
      top: 50%;
      left: 12px;
      transform: translate(-50%, -50%);
    }
  }`

const Hamburger = styled.button`
  @media (max-width: 1024px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 50px;
    margin: 0;
    padding: 0;
    background: transparent;
    border: 0;
    cursor: pointer;
    z-index: 300;
    div {
      width: 20px;
      height: 14px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
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
      span:nth-child(1) {
        top: 0;
      }
      span:nth-child(2) {
        top: 7px;
      }
      span:nth-child(3) {
        top: 7px;
      }
      span:nth-child(4) {
        top: 14px;
      }
    }
    &.open div span:nth-child(1) {
      top: 7px;
      width: 0;
      left: 50%;
    }
    &.open div span:nth-child(2) {
      transform: rotate(45deg);
    }
    &.open div span:nth-child(3) {
      transform: rotate(-45deg);
    }
    &.open div span:nth-child(4) {
      top: 7px;
      width: 0;
      left: 50%;
    }
  }
  display: none;`
