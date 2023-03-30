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
  let actual_query = data.query.s;
  const newQuery = reverseFormat(actual_query);
  const isEmpty = data.total === 0;

  return (
    <>
    <Header/>
        <SearchResultContainer>
          <div className="section-header">Search results for "{newQuery}"</div>
          <div className="search-results-container">
            {data.items.map((item) => {
              const post = state.source[item.type][item.id]
              let post_topic = ""
              const formatted_date = dayjs(post.date).format("MMMM YYYY")

              return (
                <Link key={item.id} link={post.link}>
                  <div className="search-result">
                    <div className="text">
                        <div className="heading-content">
                            <div className="category">{post_topic}</div>
                            <div className="title">{parse(post.title.rendered)}</div>
                            <div className="date">{formatted_date}</div>
                            <div className="excerpt">{parse(post.excerpt.rendered)}</div>
                        </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </SearchResultContainer>
      <Footer/>
    </>
  );
};

export default connect(SearchResults);

const SearchResultContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 0 auto 2em;
padding: 0 1em;
gap: 60px;
width: 100%;
max-width: 1512px;
box-sizing: border-box;
@media screen and (min-width: 1024px){
  margin: 0 auto 8em;
}
& .section-header{
  font-family: 'Inter Bold',sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 31px;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: black;
  border-bottom: 7px solid black;
  width: 100%;
  margin-top: 2em;
}
& .search-result{
  margin: 1em 0;
  padding: 1em;
}
& .text{
  border-bottom: solid;
}
& .title{
  font-family: 'Inter SemiBold',sans-serif;
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;
  color: #3E2B2E;
  width: 100%;
  padding: 16px;
}
& .date{
  font-family: 'Inter',sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #3E2B2E;
  width: 100%;
  padding: 0 16px 16px;
}
& .excerpt{
  color: #3E2B2E;
  font-size: 20px;
  padding: 16px;
}

`
