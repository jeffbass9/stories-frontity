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
& .top-nav-left{
  padding: 0.5em 1em;
  @media screen and (min-width: 1024px){
    padding: 1em;
  }
}
@media screen and (min-width: 1024px){
  flex-direction: row-reverse;
}`

export default TopNav;
