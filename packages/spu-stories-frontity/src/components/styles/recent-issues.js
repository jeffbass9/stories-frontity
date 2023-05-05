import { styled } from "frontity";

const RecentIssuesWrapper = styled.section`
background: #3E2B2E;
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 0 auto;
padding: 32px;
width: 100%;
box-sizing: border-box;
& .section-header{
  color: white;
  font-family: "Inter Bold", sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 31px;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  width: 100%;
  border-bottom: 7px solid white;
  margin-bottom: 2em;
}
& .view-more-button{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin-bottom: 2em;
  width: 100%;
  font-family: "Inter", sans-serif;
  font-size: 22px;
  line-height: 28px;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  color: white;
  &:hover{
    text-decoration: underline;
  }
}
& .issue-article-container{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: stretch;
  & .issue-card {
    position: relative;
    width: 48%;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    margin-bottom: 48px;
    box-sizing: border-box;
    @media screen and (min-width: 1024px){
      width: 29%;
    }
    @media screen and (min-width: 1400px){
      width: 15%;
    }

    img {
      display: inline-block;
      width: 100%;
      height: auto;
      transition: all 0.3s ease;
    }
    & .issue-image{
      overflow: hidden;
      aspect-ratio: 200 / 239;
      &:hover{
        img{
          transform: scale(1.1);
        }
      }
    }
    .text {
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
        font-weight: 500;
        line-height: 25px;
        letter-spacing: 0.02em;
        color: white;
      }
    }
  }
}
`

export default RecentIssuesWrapper;
