import { styled } from "frontity";

const PostInfo = styled.div`
width: 85%;
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
font-size: 1rem;
@media screen and (min-width: 1024px){
  max-width: 1200px;
  margin: -2em auto 2em auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
h1{
  font-family: "Sang Bleu Empire Bold", serif;
  font-size: 2em;
  font-weight: bold;
  margin: 0;
  color: #000004;
  text-align: center;
  @media screen and (min-width: 1024px){
    font-size: 52px;
  }
}
h2{
  margin: 0;
  font-family: "Inter", sans-serif;
  color: #221E1F;
  @media screen and (min-width: 1024px){
    font-size: 28px;
  }
}
h3{
  font-family: "Inter", sans-serif;
  font-size: 1em;
  color: #69757A;
  @media screen and (min-width: 1024px){
    font-size: 20px;
    line-height: 28px;
  }
}
`
export default PostInfo;
