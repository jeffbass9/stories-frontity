import { connect, styled, css } from "frontity"
import Link from "@frontity/components/link"
import Archive from "../../components/archive";
import ArchiveHeader from "../../components/archive/archive-header";
import SectionContainer from "../../components/styles/section-container";
import SearchForm from "./search-form";
import ArticleList from "../../components/styles/article-list";
import Header from "../../components/header"
import Footer from "../../components/footer"
import dayjs from "dayjs"
import parse from "html-react-parser"

const reverseFormat = (query) => query.replace("+", " ");

const SearchResults = ({ state, actions }) => {

  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  // data.total → total pages that match the current path/url
  // data.searchQuery → query done to get search results
  const { total, searchQuery } = data;
  const newQuery = reverseFormat(data.searchQuery);
  const isEmpty = data.total === 0;

  return (
    <>
    <Header/>
        <ArticleList>
          <div className="section-header">Search results for "{newQuery}"</div>
          <div className="issue-article-container">
            {data.items.map((item) => {
              const post = state.source[item.type][item.id]
              let featured_img = ""
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
          </div>
        </ArticleList>
      <Footer/>
    </>
  );
};

export default connect(SearchResults);
