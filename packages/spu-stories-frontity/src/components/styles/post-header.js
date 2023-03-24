import { styled } from "frontity";

const PostHeader = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0;
width: 100%;
height: auto;
img{
  width: 100%;
  height: auto;
  object-fit: cover;
  @media screen and (min-width: 620px){
    height: 612px;
  }
}
`
export default PostHeader;
