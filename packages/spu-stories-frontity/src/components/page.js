import React from "react"
import { connect, Head } from "frontity"
import dayjs from "dayjs"
import hero_wide_placeholder from "../images/karen-springs-hero_1210x580_acf_cropped.jpg"
import parse from "html-react-parser"
import PostContent from "../components/styles/post-content"
import ContactForm from "../components/styles/contact-form"

const Page = ({ state, libraries }) => {
  const data = state.source.get(state.router.link)
  const page = state.source[data.type][data.id]
  const page_template = page.template
  const Html2React = libraries.html2react.Component

  if(page_template == "contact-page-template.php"){
    return (
      <>
        <ContactForm>
          <div class="contact-form__content">
            <h1>{parse(page.title.rendered)}</h1>
            <Html2React html={page.content.rendered} />
          </div>
        </ContactForm>
      </>
    )
  }else{

    return (
      <>
        <PostContent>
          <h1>{parse(page.title.rendered)}</h1>
          <Html2React html={page.content.rendered} />
        </PostContent>
      </>
    )

  }

}

export default connect(Page)
