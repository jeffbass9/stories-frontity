import { styled } from "frontity";

const Menu = styled.nav`
position: absolute;
width: 100%;
padding-top: 61px;
list-style-type: none;
left: -101%;
-webkit-transition: left 0.3s ease;
-o-transition: left 0.3s ease;
transition: left 0.3s ease;
box-sizing: border-box;
text-align: center;
a{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 36px;
  background-color: white;
  border: 1px solid black;
  line-height: 18px;
  text-decoration: none;
  text-transform: uppercase;
  color: #5C5C5C;
  font-family: "Inter SemiBold", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  margin: auto;
  width: 100%;
  transition: all 0.1s ease;
  &:hover:not(.active) {
    background-color: #872937;
    color: white;
  }
}

@media (min-width: 1024px) {
  position: relative;
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  left: 0;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-left: none;
  }
}

`

export default Menu;
