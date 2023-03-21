import React from "react"
import StoriesFeatured from "../components/stories-featured"
import LatestArticles from "../components/latest-articles"
import StoriesFeatured2 from "../components/stories-featured-2"
import { connect, Head } from "frontity"

const HomePage = ({ state, libraries }) => {

  const Html2React = libraries.html2react.Component

  return (
    <div>
      <StoriesFeatured/>
      <LatestArticles/>
      <StoriesFeatured2/>
    </div>
  )
}

export default connect(HomePage)
