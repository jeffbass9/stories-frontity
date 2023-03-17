import React from "react"
import StoriesFeatured from "../components/stories-featured"
import { connect, Head } from "frontity"

const HomePage = ({ state, libraries }) => {
  const data = state.source.get(state.router.link)
  const page = state.source[data.type][data.id]

  const Html2React = libraries.html2react.Component

  return (
    <div>
      <StoriesFeatured/>
    </div>
  )
}

export default connect(HomePage)
