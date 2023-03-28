import React from "react"
import StoriesFeatured from "../components/stories/stories-featured"
import LatestArticles from "../components/stories/latest-articles"
import StoriesFeatured2 from "../components/stories/stories-featured-2"
import Header from "../components/header"
import Footer from "../components/footer"
import { connect, Head } from "frontity"

const HomePage = ({ state, actions, libraries }) => {

  const Html2React = libraries.html2react.Component

  return (
    <>
      <Header/>
        <div>
          <StoriesFeatured/>
          <LatestArticles/>
          <StoriesFeatured2/>
        </div>
      <Footer/>
    </>
  )
}

export default connect(HomePage)
