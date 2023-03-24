import { styled } from "frontity";

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
& .top-nav-centered{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  a{
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    text-align: center;
    text-decoration: none;
    position: relative;
    color: black;
    font-family: "Sang Bleu Empire Bold", serif;
    font-weight: 550;
    font-size: 30px;
    text-transform: uppercase;
    margin: 10px auto;
  }
}
& .top-nav-left{
  padding: 0.5em 1em;
  @media screen and (min-width: 1024px){
    padding: 1em;
  }
  &.stories-hide-on-mobile{
    display: none;
    @media screen and (min-width: 1024px){
      display: inline-block;
    }
  }
}
@media screen and (min-width: 1024px){
  flex-direction: row-reverse;
}`

export default TopNav;
