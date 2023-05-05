import Root from "./components"
import link from "@frontity/html2react/processors/link";
import menuHandler from "./components/handlers/menu-handler";
import pagesHandler from "./components/handlers/pages-handler";
import responseIssueHandler from "./components/handlers/response-issue-handler";
import spuUsersHandler from "./components/handlers/spu-users-handler";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import source from "./processors/source"
import headingInView from "./processors/heading-in-view"
import spuImage from "./processors/spu-image"
import {responseDepartments} from "./config"

const spuStoriesFrontity = {
  name: "spu-stories-frontity",
  roots: {
    theme: Root,
  },
  state: {
    theme: {
      autoPrefetch: "in-view",
      isUrlVisible: false,
      isSearchModalOpen: false,
    },
  },
  actions: {
    theme: {
      toggleUrl: ({ state }) => {
        state.theme.isUrlVisible = !state.theme.isUrlVisible
      },
      beforeSSR: async({state, actions}) =>{
        await actions.source.fetch("/menu/header-menu-2023");
        await actions.source.fetch("/menu/footer-menu-2023");
        await actions.source.fetch("/menu/response-header-menu-2023");
        await actions.source.fetch("/menu/response-footer-menu-2023");
        await actions.source.fetch("/homepage");
        await actions.source.fetch("/response-issues");
        await actions.source.fetch("/articles/");
        await actions.source.fetch("/spu-users");
        await Promise.all(
          Object.values(responseDepartments)
            .map(department => actions.source.fetch(`/response-department/${department}`))
        );
      },
      // State for the search modal on mobile
      openMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = true;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
      openSearchModal: ({ state }) => {
        state.theme.isSearchModalOpen = true;
      },
      closeSearchModal: ({ state }) => {
        state.theme.isSearchModalOpen = false;
      }
    },
  },
  libraries: {
    html2react: {
      processors: [iframe, link, source, spuImage, headingInView]
    },
    source: {
      handlers: [menuHandler, pagesHandler, responseIssueHandler, spuUsersHandler],
    }
  }
}

export default spuStoriesFrontity
