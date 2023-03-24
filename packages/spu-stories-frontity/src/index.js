import Root from "./components"
import link from "@frontity/html2react/processors/link";
import menuHandler from "./components/handlers/menu-handler"
import pagesHandler from "./components/handlers/pages-handler"
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import source from "./processors/source"
import headingInView from "./processors/heading-in-view"

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
        await actions.source.fetch('/menu/header-menu-2023');
        await actions.source.fetch('/menu/footer-menu-2023');
        await actions.source.fetch('/menu/response-header-menu-2023');
        await actions.source.fetch('/menu/response-footer-menu-2023');
        if (state.router.link === "/") {
          // Stop the server-side rendering (SSR) until this is ready.
          await actions.source.fetch("/homepage");
        }
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
      processors: [image, iframe, link, source , headingInView]
    },
    source: {
      handlers: [menuHandler, pagesHandler],
    }
  }
}

export default spuStoriesFrontity
