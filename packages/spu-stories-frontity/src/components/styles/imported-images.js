import { Global, css, connect } from "frontity";

const ImportedImages = ({ state }) => {

  return (
    <Global
      styles={css`
          .alignright{
            position: relative;
            float: right;
            margin: 0 0 1em 1em;
          }
          .alignleft{
            position: relative;
            float: left;
            margin: 0 1em 1em 0;
          }
      `}
    />
  );
};

export default connect(ImportedImages);
