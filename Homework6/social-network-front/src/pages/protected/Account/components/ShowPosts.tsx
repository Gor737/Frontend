import { useState } from "react";
import { getPostInfo } from "../../../../services/accounts";
import type { PostInfo } from "../../../../types/account";
import { ShowPost } from "./ShowPost";
import "./ShowPosts.css";

type Props = {
  post: PostInfo;
  onPostDeleted: () => void;
};

export const ShowPosts = ({ post, onPostDeleted }: Props) => {
  const [postInfo, setPostInfo] = useState<PostInfo | null>(null);
  const [isOpenPost, setIsOpenPost] = useState<boolean>(false);

  const openPost = () => setIsOpenPost(true);

  const closePost = async() => {
    setIsOpenPost(false);
    setPostInfo(null);
  };

  console.log(post);

  const handleClick = async () => {
    const res = await getPostInfo(post.id);
    setPostInfo(res.postInfo);
    openPost();
  };

  if (postInfo && isOpenPost) {
    return (
      <ShowPost
        postInfo={postInfo}
        closePost={closePost}
        onPostDeleted = {onPostDeleted}
      />
    );
  }

return (
  <article className="post-card" onClick={handleClick}>
    <div className="post-card__image">
      {post.postImage ? (
        <img
          src={`http://localhost:4002/${post.postImage}`}
          alt={post.title}
        />
      ) : (
        <div className="post-card__no-image">
          <span>✦</span>
        </div>
      )}
    </div>

    <div className="post-card__content">
      <div className="post-card__header">
        <h3>{post.title}</h3>

        {post.location && (
          <span className="post-card__location">
            📍 {post.location}
          </span>
        )}
      </div>

      <p className="post-card__description">
        {post.description}
      </p>

      {post.tags.length > 0 && (
        <div className="post-card__tags">
          {/* {post.tags.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))} */}
          {postInfo?.tags}
        </div>
      )}
    </div>
  </article>
);
};