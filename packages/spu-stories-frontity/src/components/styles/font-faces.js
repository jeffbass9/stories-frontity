import { Global, css, connect } from "frontity";

import inter_light from "../../fonts/Inter-Light.ttf"
import inter_regular from "../../fonts/Inter-Regular.ttf"
import inter_bold from "../../fonts/Inter-Bold.ttf"
import inter_semi_bold from "../../fonts/Inter-SemiBold.ttf"

import sang_bleu_empire_regular from "../../fonts/sangbleuempire-regular.ttf"
import sang_bleu_empire_medium from "../../fonts/sangbleuempire-medium.ttf"
import sang_bleu_empire_bold from "../../fonts/sangbleuempire-bold.ttf"

const FontFaces = ({ state }) => {

  return (
    <Global
      styles={css`
        @font-face {
          font-family: "Inter Light";
          src: url(${inter_light});
          font-weight: 300;
          font-style: normal;
        }
        @font-face {
          font-family: "Inter Regular";
          src: url(${inter_regular});
          font-weight: 400;
          font-style: normal;
        }
        @font-face {
          font-family: "Inter Bold";
          src: url(${inter_bold});
          font-weight: 700;
          font-style: normal;
        }
        @font-face {
          font-family: "Inter SemiBold";
          src: url(${inter_semi_bold});
          font-weight: 700;
          font-style: normal;
        }
        @font-face {
          font-family: "Sang Bleu Empire";
          src: url(${sang_bleu_empire_regular});
          font-weight: 500;
          font-style: normal;
        }
        @font-face {
          font-family: "Sang Bleu Empire Medium";
          src: url(${sang_bleu_empire_medium});
          font-weight: 600;
          font-style: normal;
        }
        @font-face {
          font-family: "Sang Bleu Empire Bold";
          src: url(${sang_bleu_empire_bold});
          font-weight: 700;
          font-style: normal;
        }
      `}
    />
  );
};

export default connect(FontFaces);
