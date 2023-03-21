import React from "react"
import { connect, styled, css } from "frontity"
import dayjs from "dayjs"
import hero_wide_placeholder from "../images/karen-springs-hero_1210x580_acf_cropped.jpg"
import parse from "html-react-parser"

const Post = ({ state, libraries }) => {
  const data = state.source.get(state.router.link)
  const post = state.source[data.type][data.id]
  const author = state.source.author[post.author]
  const Html2React = libraries.html2react.Component
  const formattedDate = dayjs(post.date).format("MMMM DD YYYY")
  let hero_img = hero_wide_placeholder
  if(post.acf.article_full_hero){
    hero_img = post.acf.article_full_hero
  }else{
    hero_img = state.source.attachment[post.featured_media].source_url
  }

  return (
    <>
      <PostHeader>
        <img src={hero_img}/>
      </PostHeader>
      <PostInfo>
        <h1>{parse(post.title.rendered)}</h1>
        <h2>{author}</h2>
        <h3>{formattedDate}</h3>
      </PostInfo>
      <PostContent>
        <Html2React html={post.content.rendered} />
      </PostContent>
    </>
  )
}

export default connect(Post)

const PostHeader = styled.div`
display: inline-block;
position: relative;
width: 100%;
max-height: 500px;
overflow: hidden;
img{
  width: 100%;
  height: auto;
}
`
const PostInfo = styled.div`
display: inline-block;
position: relative;
text-align: center;
margin: 0;
background-color: white;
@media screen and (min-width: 1024px){
  width: 85%;
  max-width: 1200px;
  margin: -2em auto 2em auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
`
const PostContent = styled.div`
display: inline-block;
position: relative;
padding: 1em;
font-family: "Inter", serif;
line-height: 1.75em;
@media screen and (min-width: 1024px){
  width: 75%;
  max-width: 1000px;
  margin: auto auto 2em auto;
  padding: 1em 0;
  box-sizing: border-box;
}
p {
  font-size: 1.2em;
  margin: 1em auto;
}
& .description{
  font-size: 1.3em;
}
blockquote{
  width: 30%;
  float: right;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 1.1em;
  border-top: solid black 7px;
}
.episode_name{
  display: none;
}
.meta .date{
  display: none;
}
`
