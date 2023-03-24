import { styled } from "frontity";

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
export default Hamburger;
