import { styled } from "frontity";

const PostInfo = styled.div`
width: 68%;
margin-top: -80px;
padding: 24px;
gap: 24px;
background: white;
box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: box-shadow .15s cubic-bezier(.4,0,.2,1);
@media screen and (min-width: 1024px){
  width: 85%;
  max-width: 1200px;
  margin: -2em auto 2em auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
h1{
  font-family: "Sang Bleu Empire Bold", serif;
  font-size: 52px;
  font-weight: bold;
  margin: 0;
  color: #000004;
}
h2{
  margin: 0;
  font-family: "Inter", sans-serif;
  font-size: 28px;
  color: #221E1F;
}
h3{
  font-family: "Inter", sans-serif;
  font-size: 20px;
  line-height: 28px;
  color: #69757A;
}
`
export default PostInfo;
