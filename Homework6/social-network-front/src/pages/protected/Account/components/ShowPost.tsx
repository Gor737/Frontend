import { deletePost } from "../../../../services/accounts";
import type { PostInfo } from "../../../../types/account";
import "./ShowPost.css";

type Props = {
  postInfo: PostInfo;
  closePost: () => void;
  onPostDeleted: () => void;
};

export const ShowPost = ({ postInfo, closePost, onPostDeleted }: Props) => {
    const handleDelete = async () => {
        await deletePost(postInfo.id);
        onPostDeleted();
        closePost();
    }

  return (
    <div className="post-modal-overlay">
      <div className="post-modal">
        <div className="post-modal__header">
          <div>
            <span className="post-modal__label">POST</span>
            <h2>{postInfo.title}</h2>
          </div>

          <button
            type="button"
            className="post-modal__close"
            onClick={closePost}
            aria-label="Close post"
          >
            ×
          </button>
        </div>

        {postInfo.postImage && (
          <div className="post-modal__image">
            <img
              src={`http://localhost:4002/${postInfo.postImage}`}
              alt={postInfo.title}
            />
          </div>
        )}

        <div className="post-modal__content">
          <p className="post-modal__description">
            {postInfo.description}
          </p>

          <div className="post-modal__meta">
            {postInfo.location && (
              <span className="post-modal__location">
                📍 {postInfo.location}
              </span>
            )}

            {postInfo.tags.length > 0 && (
              <div className="post-modal__tags">
                {/* {postInfo.tags.map((tag) => (
                  <span key={tag}>#{tag}</span>
                ))} */}
                {postInfo.tags}
              </div>
            )}

            <button onClick={handleDelete}>Delete Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};