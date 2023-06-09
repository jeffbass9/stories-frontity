import { connect, decode } from "frontity";
import { Fragment } from "react";
import Link from "@frontity/components/link"
import { PostMetaList, PostMetaWrapper } from "./post-meta";
import PostMetaItem from "./post-meta-item";

const PostTags = ({ tags }) => {
  // Remove empty or undefined tags
  const postTags = tags.filter(Boolean);

  if (postTags.length === 0) {
    return null;
  }

  return (
    <PostMetaWrapper>
      <PostMetaList style={{ justifyContent: "flex-start" }}>
        <PostMetaItem label="Post Tags">
          {postTags.map((tag, index) => {
            const isLastTag = index === postTags.length - 1;
            return (
              <Fragment key={tag.id}>
                <Link link={tag.link}>{decode(tag.name)}</Link>
                {!isLastTag && <>, </>}
              </Fragment>
            );
          })}
        </PostMetaItem>
      </PostMetaList>
    </PostMetaWrapper>
  );
};

export default connect(PostTags);
