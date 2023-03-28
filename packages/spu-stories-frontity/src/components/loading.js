import React from "react"
import { styled, keyframes, connect } from "frontity"
import Header from "../components/header"
import Footer from "../components/footer"

const Loading = ({state}) => {
  return (
    <>
      <Header/>
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      <Footer/>
      </>
    )
}

export default connect(Loading)

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`
const SpinnerContainer = styled.div`
display: flex;
justify-content: space-around;
text-align: center;
width: 100%;
`

const Spinner = styled.div`
  position: absolute;
  top: 100px;
  border: 12px solid #eee;
  border-top: 12px solid steelblue;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  margin: auto;
  animation: ${spin} 2s linear infinite;
`
