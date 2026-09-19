import { useForm } from "react-hook-form";
import type { createPostType } from "../../../../types/account";
import { useEffect, useState, type ChangeEvent } from "react";
import { createPost } from "../../../../services/accounts";
import { ImagePlus, MapPin, Hash, X } from "lucide-react";
import "./AddPost.css";

type Props = {
  closeCreatePost: () => void;
};

export const AddPost = ({ closeCreatePost }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createPostType>();

  const [photo, setPhoto] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const addPhoto = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      setPhoto(file);
    }
  };

  useEffect(() => {
    if (!photo) {
      setPreview(null);
      return;
    }

    const url = URL.createObjectURL(photo);
    setPreview(url);

    return () => {
      URL.revokeObjectURL(url);
    };
  }, [photo]);

  const onSubmit = async (data: createPostType) => {
    const form = new FormData();

    form.append("title", data.title);
    form.append("description", data.description);

    if (data.location) {
      form.append("location", data.location);
    }

    if (data.tags) {
      form.append("tags", JSON.stringify(data.tags));
    }

    if (photo) {
      form.append("image", photo);
    }

    await createPost(form);

    closeCreatePost();
  };

  return (
    <div className="create-post">
      <div className="create-post__header">
        <div>
          <h2>Create new post</h2>
          <p>Share something with your followers</p>
        </div>

        <button
          type="button"
          className="create-post__close"
          onClick={closeCreatePost}
        >
          <X size={20} />
        </button>
      </div>

      <form className="create-post__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-field">
          <label>Title</label>

          <input
            type="text"
            placeholder="Give your post a title..."
            {...register("title", {
              required: "Title is required",
            })}
          />

          {errors.title && (
            <span className="error-message">{errors.title.message}</span>
          )}
        </div>

        <div className="form-field">
          <label>Description</label>

          <textarea
            placeholder="What's on your mind?"
            {...register("description", {
              required: "Description is required",
            })}
          />

          {errors.description && (
            <span className="error-message">{errors.description.message}</span>
          )}
        </div>

        <div className="create-post__row">
          <div className="form-field">
            <label>
              <MapPin size={15} />
              Location
            </label>

            <input
              type="text"
              placeholder="Yerevan"
              {...register("location")}
            />
          </div>

          <div className="form-field">
            <label>
              <Hash size={15} />
              Tags
            </label>

            <input
              type="text"
              placeholder="travel, food..."
              {...register("tags")}
            />
          </div>
        </div>

        <label className={`image-upload ${photo ? "has-image" : ""}`}>
          <input
            type="file"
            accept="image/png, image/jpeg, image/webp"
            onChange={addPhoto}
          />

          {preview ? (
            <div className="image-preview">
              <img src={preview} alt="Selected preview" />

              <div className="image-preview__overlay">
                <ImagePlus size={24} />
                <span>Change image</span>
              </div>
            </div>
          ) : (
            <>
              <ImagePlus size={32} />

              <strong>Add an image</strong>

              <span>JPG, PNG or WEBP</span>
            </>
          )}
        </label>

        <div className="create-post__actions">
          <button
            type="button"
            className="cancel-btn"
            onClick={closeCreatePost}
          >
            Cancel
          </button>

          <button type="submit" className="publish-btn">
            Publish Post
          </button>
        </div>
      </form>
    </div>
  );
};
