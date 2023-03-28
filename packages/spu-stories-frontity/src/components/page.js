import React from "react"
import { connect, Head } from "frontity"
import dayjs from "dayjs"
import hero_wide_placeholder from "../images/karen-springs-hero_1210x580_acf_cropped.jpg"
import parse from "html-react-parser"
import PostContent from "../components/styles/post-content"
import ContactForm from "../components/styles/contact-form"
import Header from "../components/header"
import Footer from "../components/footer"
import ResponseHeader from "../components/response/response-header"
import ResponseFooter from "../components/response/response-footer"

const Page = ({ state, libraries }) => {
  const data = state.source.get(state.router.link)
  const page = state.source[data.type][data.id]
  const page_template = page.template
  const Html2React = libraries.html2react.Component

  if(page_template == "contact-page-template.php"){
    return (
      <>
        <ResponseHeader/>
          <ContactForm>
            <div className="contact-form__content">
              <h1>{parse(page.title.rendered)}</h1>
              <Html2React html={page.content.rendered} />
            </div>
          </ContactForm>
        <ResponseFooter/>
      </>
    )
  }else{

    return (
      <>
        <Header/>
          <PostContent>
            <div className="post-content__inner">
              <h1>{parse(page.title.rendered)}</h1>
              <Html2React html={page.content.rendered} />
            </div>
          </PostContent>
        <Footer/>
      </>
    )

  }

}

export default connect(Page)
