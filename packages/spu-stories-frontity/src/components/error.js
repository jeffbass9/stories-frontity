import React from "react"
import { connect } from "frontity"
import Header from "../components/header"
import Footer from "../components/footer"

const Error = ({ state }) => {
  return (
    <>
      <Header/>
        <h2>404 Error</h2>
        <p>
          The path <em>{state.router.link}</em> cannot be found.
        </p>
      <Footer/>
    </>
  )
}

export default connect(Error)
