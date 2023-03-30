import React from "react"
import { connect, styled } from "frontity"
import Link from "@frontity/components/link"
import parse from "html-react-parser"
import article_placeholder from "/packages/spu-stories-frontity/src/images/article-placeholder.jpeg"
import dayjs from "dayjs"
import returnFeaturedImage from "../services/returnFeaturedImage"
import ArticleList from "../components/styles/article-list"
import Header from "../components/header"
import Footer from "../components/footer"

const List = ({ state, actions }) => {
  const data = state.source.get(state.router.link)
  let current_url = state.router.link
  let title = "Latest Articles"

  if(current_url == "/response-department/home/"){
    title = "Campus News";
  }else if(current_url == "/response-department/alumni/"){
    title = "Alumni News";
  }else if(current_url == "/response-department/features/"){
    title = "Features";
  }else if(current_url == "/response-department/class-notes/"){
    title = "Reflections";
  }else if(current_url == "/response-department/in-the-loop/"){
    title = "Life at SPU";
  }else if(current_url == "/topic/response-magazine/"){
    title = "Response Departments";
  }else{
    title = "Latest Articles"
  }

  return (
    <>
      <Header/>
        <ArticleList>
          <div className="section-header">{title}</div>
            <div className="issue-article-container">
                {data.items.map((item) => {
                  const post = state.source[item.type][item.id]
                  let featured_img = article_placeholder
                  let post_topic = ""

                  if(state.source.attachment[post.featured_media]){
                    featured_img = state.source.attachment[post.featured_media].source_url
                  }else{
                    featured_img = post.acf.article_full_hero
                  }

                  const formatted_date = dayjs(post.date).format("MMMM YYYY")

                  return (
                    <Link key={item.id} link={post.link} className="article-card">
                    <div className="article-image">
                    <img src={featured_img}/>
                    </div>
                      <div className="text">
                          <div className="heading-content">
                              <div className="category">{post_topic}</div>
                              <div className="title">{parse(post.title.rendered)}</div>
                          </div>
                          <div className="date">{formatted_date}</div>
                      </div>
                      <br />
                    </Link>
                  )
                })}
                <PrevNextNav>
                  {data.previous && (
                    <button
                      onClick={() => {
                        actions.router.set(data.previous)
                      }}
                    >
                      &#171; Prev
                    </button>
                  )}
                  {data.next && (
                    <button
                      onClick={() => {
                        actions.router.set(data.next)
                      }}
                    >
                      Next &#187;
                    </button>
                  )}
                </PrevNextNav>
          </div>
        </ArticleList>
      <Footer/>
    </>
  )
}

export default connect(List)

const PrevNextNav = styled.div`
  padding-top: 1.5em;

  & > button {
    background: #eee;
    text-decoration: none;
    padding: 0.5em 1em;
    color: #888;
    border: 1px solid #aaa;
    font-size: 0.8em;
    margin-right: 2em;
  }
  & > button:hover {
    cursor: pointer;
  }
`
