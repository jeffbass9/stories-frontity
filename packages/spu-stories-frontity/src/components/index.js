import React from "react"
import { connect, Global, css, styled, Head } from "frontity"
import FontFaces from "../components/styles/font-faces"
import Link from "@frontity/components/link"
import Switch from "@frontity/components/switch"
import Loading from "../components/loading"
import List from "../components/list"
import Post from "../components/post"
import Page from "../components/page"
import HomePage from "../components/home-page"
import ResponseIssue from "../components/response-issue"
import SearchResults from "../components/search/search-results";
import Error from "./error"
import Header from "../components/header"
import Footer from "../components/footer"

const Root = ({ state, actions }) => {
  const data = state.source.get(state.router.link)

  return (
    <>
    <Head>
      <meta charset="UTF-8"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <title>SPU Stories</title>
      <meta name="author" content="Thy Tran"/>
    </Head>
    <FontFaces/>
    <Global
      styles={css`
        body {
          gap: 0;
          position: relative;
          min-height: 100vh;
          margin: 0;
        }

        a {
          vertical-align: baseline;
        }

        a:active, a:hover, a:link, a:visited {
          text-decoration: none;
        }

        input {
          border: 1px solid rgba(0, 0, 0, 0.25);
          border-radius: 2px;
          height: 48px;
          width: 100%;
        }

        label {
          font-family: "Inter", sans-serif;
          font-size: 20px;
          line-height: 25px;
          display: flex;
          align-items: center;
          text-transform: capitalize;
          color: #333333;
        }

        p {
          margin: 0;
        }
      `}
    />
      <Header/>
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <SearchResults when={data.isSearch} />
          <Post when={data.isArticle} />
          <ResponseIssue when={data.isResponseIssue} />
          <Page when={data.isPage} />
          <HomePage when={data.isHome} />
          <List when={data.isArchive} />
          <Error when={data.isError} />
        </Switch>
      </Main>
      <Footer/>
    </>
  )
}

export default connect(Root)


const Main = styled.main`
  @media only screen and (max-width: 1024px) {
    padding-bottom: 80rem;
    margin-top: 50px;
  }
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  padding-bottom: 800px;
  width: 100%;
  margin-top: 108px;
`

const Button = styled.button`
  background: transparent;
  border: none;
  color: #aaa;

  :hover {
    cursor: pointer;
    color: #888;
  }
`
