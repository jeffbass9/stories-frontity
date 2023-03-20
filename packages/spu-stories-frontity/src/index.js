import Root from "./components"
import link from "@frontity/html2react/processors/link";
import menuHandler from "./components/handlers/menu-handler"

const spuStoriesFrontity = {
  name: "spu-stories-frontity",
  roots: {
    theme: Root,
  },
  state: {
    theme: {
      isUrlVisible: false,
    },
  },
  actions: {
    theme: {
      toggleUrl: ({ state }) => {
        state.theme.isUrlVisible = !state.theme.isUrlVisible
      },
      beforeSSR: async({state, actions}) =>{
        await actions.source.fetch('/menu/header-menu-2023')
      }
    },
  },
  libraries: {
    html2react: {
      processors: [link]
    },
    source: {
      handlers: [menuHandler],
    }
  }
}

export default spuStoriesFrontity
