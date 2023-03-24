import { styled } from "frontity";

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
input:checked ~ nav {
  left: -1px;
}
@media screen and (max-width: 1024px){
  display: inline-block;
}
input:checked + label span:nth-of-type(1) {
  top: 7px;
  width: 0;
  left: 50%;
}
input:checked + label span:nth-of-type(2) {
  transform: rotate(45deg);
}
input:checked + label span:nth-of-type(3) {
  transform: rotate(-45deg);
}
input:checked + label span:nth-of-type(4) {
  top: 7px;
  width: 0;
  left: 50%;
}
`
export default HeaderContainer;
