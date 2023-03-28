import React from "react";
import {Helmet} from "react-helmet";
import { styled, keyframes, connect } from "frontity"

const MazeEmbed = () => {
    return (
      <>
        <Helmet>
        <script src="https://snippet.maze.co/maze-universal-loader.js?t=1679942175589&apiKey=8da20661-5388-4399-a78e-1392b43fe3d7" async></script>
        <script src="https://snippet.maze.co/contextualScaffold.js?t=1679942175589" async></script>
        </Helmet>
      </>
    )
}

export default connect(MazeEmbed);
