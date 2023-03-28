import { styled } from "frontity";

const PostContent = styled.div`
font-family: "Inter Light", sans-serif;
line-height: 16px;
text-align: center;
width: 100%;
.post-content__inner{
  width: 100%;
  max-width: 1080px;
  margin: 3em auto 0 auto;
  padding: 0 1em;
  span{
    display: none;
  }
}
@media screen and (min-width: 620px){
  line-height: 36px;
}
p {
  text-align: left;
  margin: 0 auto 36px auto;
  font-size: 12px;
  max-width: 1080px;
  @media screen and (min-width: 620px){
    font-size: 22px;
  }
}
h1{
  text-align: left;
}
h3{
  max-width: 1080px;
  margin: 0 auto 36px auto;
  font-size: 30px;
  @media screen and (min-width: 620px){
    width: 72%;
    margin: 0 calc(8% + 32px) 36px auto;
    font-size: 16px;
  }
}
& .description{
  font-size: 1.3em;
  max-width: 1080px;
  margin: 0 auto 36px auto;
}
blockquote{
  text-align: left;
  width: 50%;
  float: right;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 1.1em;
  border-top: solid black 7px;
  @media screen and (min-width: 1040px){
    width: 30%;
  }
}
.episode_name{
  display: none;
}
.meta .date{
  display: none;
}
`
export default PostContent;
