import { styled } from "frontity";

const PostContent = styled.div`
font-family: "Inter Light", sans-serif;
text-align: center;
width: 100%;
.post-content__inner{
  width: 100%;
  max-width: 1080px;
  margin: 3em auto 2em auto;
  padding: 0 1em;
  box-sizing: border-box;
  @media screen and (min-width: 1024px){
    margin: 3em auto 8em auto;
  }
}
@media screen and (min-width: 620px){
  line-height: 36px;
}
p {
  text-align: left;
  margin: 0 auto 36px auto;
  font-size: 16px;
  max-width: 1080px;
  @media screen and (min-width: 1024px){
    font-size: 22px;
  }
}
h1{
  text-align: left;
}
h3{
  max-width: 1080px;
  margin: 0 auto 36px auto;
  font-size: 30px;
  @media screen and (min-width: 620px){
    width: 72%;
    margin: 0 calc(8% + 32px) 36px auto;
    font-size: 16px;
  }
}
img{
  height: auto;
  max-width: 100%;
}
& .description{
  font-size: 1.3em;
  max-width: 1080px;
  margin: 0 auto 36px auto;
}
blockquote{
  text-align: left;
  width: 50%;
  float: right;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 1.1em;
  border-top: solid black 7px;
  @media screen and (min-width: 1040px){
    width: 30%;
  }
}
.episode_name{
  display: none;
}
.meta .date{
  display: none;
}

.callout{
	padding: 2em;
	margin: 2em;
	box-sizing: border-box;
	float: right;
	background-color: #E5E5E0;
	width: 50%;
	font-size: 14px;
}
.callout h4{
	margin: 0;
}
.callout p{
	font-size: 16px;
	text-align: center;
}
h5.callout__number{
	font-size: 45px;
	text-align: center;
	margin: 1em;
}
.callout-wide{
	width: 100%;
	float: none;
	margin: 0;
	font-size: 18px;
}
.callout-wide h3{
	margin-top: 0;
}
p.callout-number{
	font-size: 64px;
	font-weight: 800;
	margin: 0;
}
.callout .alignright{
		float: none;
		width: 100%;
		margin: 0;
	}
.callout ul{
	padding-inline-start: 20px;
}
.wp-caption.alignright{
  float: right;
  text-align: left;
  display: inline-block;
  margin: 0 0 1em 2em;
  & span{
    padding-bottom: 0;
  }
  & img{
    height: auto;
  }
}
.wp-caption.alignleft{
  float: left;
  text-align: left;
  display: inline-block;
  margin: 0 1em 2em 0;
  & span{
    padding-bottom: 0;
  }
  & img{
    height: auto;
  }
}
span.alignright{
  float: right;
  margin: 0 0 0 1em;
}
span.alignleft{
  float: left;
  margin: 0 1em 0 0;
}
span.aligncenter {
  text-align: center;
  img{
    margin: auto;
  }
}
`
export default PostContent;
