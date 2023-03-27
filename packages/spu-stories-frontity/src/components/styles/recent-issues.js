import { styled } from "frontity";

const RecentIssuesWrapper = styled.section`
background: #3E2B2E;
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 0 auto;
padding: 32px 120px;
gap: 60px;
width: 100%;
& .section-header{
  color: white;
  border-bottom-color: white;
  font-family: "Inter Bold", sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 31px;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  width: 100%;
}
& .issue-article-container{
  & .issue-card {
    position: relative;
    width: 100%;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 48px;
    &:nth-of-type(6n+1){
      @media screen and (min-width: 1280px){
        flex: 0 0 16.66%;
        padding: 0 20px 0 0;
      }
    }
    &:nth-of-type(6n+2){
      @media screen and (min-width: 1280px){
        flex: 0 0 16.66%;
        padding: 0 20px;
      }
    }
    &:nth-of-type(6n+3){
      @media screen and (min-width: 1280px){
        flex: 0 0 16.66%;
        padding: 0 20px;
      }
    }
    &:nth-of-type(6n+4){
      @media screen and (min-width: 1280px){
        flex: 0 0 16.66%;
        padding: 0 20px;
      }
    }
    &:nth-of-type(6n+5){
      @media screen and (min-width: 1280px){
        flex: 0 0 16.66%;
        padding: 0 20px;
      }
    }
    &:nth-of-type(6n){
      @media screen and (min-width: 1280px){
        flex: 0 0 16.66%;
        padding: 0 0 0 20px;
      }
    }
    &:nth-of-type(2n+1){
      @media only screen and (max-width: 1390px) and (min-width: 376px) {
        flex: 0 0 50%;
        padding: 0 8px 0 0;
        margin-bottom: 16px;
      }
    }
    &:nth-of-type(2n){
      @media only screen and (max-width: 1390px) and (min-width: 376px) {
        flex: 0 0 50%;
        padding-left: 8px;
        margin-bottom: 16px;
      }
    }
    img {
      display: block;
      width: 100%;
      background-repeat: no-repeat;
      background-position: 50%;
      background-size: cover;
      height: 16vw;
      object-fit: cover;
      @media only screen and (max-width: 1390px) and (min-width: 376px) {
        height: 48vw;
      }
      @media only screen and (max-width: 375px) {
        height: 120vw;
      }
    }
    .text {
      display: flex;
      flex-direction: column;
      flex: 1;
      justify-content: space-between;
      gap: 8px;
      a:hover {
        text-decoration-line: underline;
        text-decoration-thickness: 2px;
        text-decoration-color: white;
        text-underline-offset: 4px;
      }
      .quarter {
        font-family: "Inter SemiBold", sans-serif;
        font-size: 20px;
        line-height: 25px;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: white;
      }
      .title {
        font-family: "Inter", sans-serif;
        font-size: 20px;
        line-height: 25px;
        letter-spacing: 0.02em;
        color: white;
      }
    }
  }
}
`

export default RecentIssuesWrapper;
