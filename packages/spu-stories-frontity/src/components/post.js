import React from "react"
import Switch from "@frontity/components/switch"
import { connect, styled, css } from "frontity"
import dayjs from "dayjs"
import hero_wide_placeholder from "../images/karen-springs-hero_1210x580_acf_cropped.jpg"
import parse from "html-react-parser"
import PostHeader from "../components/styles/post-header"
import PostContent from "../components/styles/post-content"
import PostInfo from "../components/styles/post-info"
import Header from "../components/header"
import Footer from "../components/footer"
import ResponseHeader from "../components/response/response-header"
import ResponseFooter from "../components/response/response-footer"

const Post = ({ state, libraries }) => {
  const data = state.source.get(state.router.link)
  const post = state.source[data.type][data.id]
  const author = state.source.author[post.author]
  const Html2React = libraries.html2react.Component
  const formattedDate = dayjs(post.date).format("MMMM DD YYYY")
  let hero_img = hero_wide_placeholder
  let response_department = post["response-department"]
  let page_template = post.template
  let header = <StoriesHeader/>

  if(post.acf.article_full_hero){
    hero_img = post.acf.article_full_hero
  }else{
    hero_img = state.source.attachment[post.featured_media].source_url
  }

  if(response_department){
    header = <ResponseHeader/>
    footer = <ResponseFooter/>
  }else{
    header = <StoriesHeader/>
    footer = <StoriesFooter/>
  }

  return (
    <>
      {header}
        <PostHeader>
          <img src={hero_img}/>
          <PostInfo>
            <h1>{parse(post.title.rendered)}</h1>
            <h2>{author}</h2>
            <h3>{formattedDate}</h3>
          </PostInfo>
        </PostHeader>

        <PostContent>
          <div className="post-content__inner">
            <Html2React html={post.content.rendered} />
          </div>
        </PostContent>
      {footer}
    </>
  )
}

export default connect(Post)

const PortraitOrientation = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0;
width: 100%;
height: auto;
img {
  width: 48vw;
  object-fit: cover;
}
div{
  width: 68%;
  margin-left: -72px;
  margin-right: 12px;
  padding: 24px;
  gap: 24px;
  background: white;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
`;
