import { connect, styled } from "frontity";
import search_icon from "/packages/spu-stories-frontity/src/images/icon-search-36px.svg"

const SearchButton = ({ state, actions }) => {
  // Get the state of the search modal
  const { isSearchModalOpen } = state.theme;
  const { openSearchModal } = actions.theme;

  return (
    <img aria-expanded={isSearchModalOpen}
    onClick={openSearchModal}
    aria-label="Click to open search bar..."
    src={search_icon} alt="Search"/>
  );
};

export default connect(SearchButton);

const HeaderToggle = styled.div`
  display: none;

  @media (min-width: 1000px) {
    display: flex;
    flex-shrink: 0;
    margin-right: -3rem;
    margin-left: 3rem;
  }

  @media (min-width: 1220px) {
    margin-right: -4rem;
    margin-left: 4rem;
  }
`;
