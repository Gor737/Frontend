import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../../context/AuthContext/AuthContext";
import type { AuthContextType } from "../../../types/auth";
import { Camera, Settings } from "lucide-react";
import "./Account.css";
import { changeAvatar, changeBio, getUserProfile } from "../../../services/accounts";
import type { BioType, UserProfile } from "../../../types/account";
import { useNavigate } from "react-router-dom";
import { AddPost } from "./components/AddPost";
import { ShowPosts } from "./components/ShowPosts";

export const Account = () => {
  const authContext = useContext<AuthContextType | null>(AuthContext);
  const [bio, setBio] = useState<string>(authContext?.user?.bio ?? "");
  const [isCreatePostOpen, setIsCreatePostOpen] = useState<boolean>(false);
  const userBio = useRef<HTMLParagraphElement | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const navigate = useNavigate();

  const isFirstRender = useRef(true);

  const fetchUser = async (username:string) => {
    const res = await getUserProfile(username);
    setUserProfile(res.user);
  }

  const onPostDeleted = () => {
    const username = authContext?.user?.username;
    if(!username) return;
    fetchUser(username);
  }

  useEffect(() => {
    const username = authContext?.user?.username;
    if(!username) return;
    fetchUser(username);
  },[authContext?.user?.username])

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const timer = setTimeout(async () => {
      const newBio: BioType = { bio };
      await changeBio(newBio);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [bio]);

  if (!authContext) {
    throw new Error("context not found");
  }

  const user = authContext.user;

  if (authContext.loading) {
    return <div className="account-loading">Loading...</div>;
  }

  if (!user) {
    return null;
  }

   
  const onChangeBio = () => {
    const newBio = userBio.current?.textContent || "No Bio Yet.";
    setBio(newBio);
  };

  const onChangeAvatar = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const file = event.target.files?.[0];
      if (!file) return;
      await changeAvatar(file);
      await authContext.updateUser();
    } catch (err) {
      console.log(err);
    }
  };

  const closeCreatePost = () => setIsCreatePostOpen(false);
  const openCreatePost = () => setIsCreatePostOpen(true);

  return (
    <main className="account">
      <section className="profile-card">
        <div className="profile-main">
          <div className="profile-avatar-wrapper">
            <div className="profile-avatar">
              <img
                src={
                  user.avatar
                    ? `http://localhost:4002/${user.avatar}`
                    : "https://i.pravatar.cc/150"
                }
                alt={`${user.username} avatar`}
              />

              <button className="avatar-edit-btn">
                <input type="file" onChange={onChangeAvatar} />
                <Camera size={18} />
              </button>
            </div>
          </div>

          <div className="profile-info">
            <div className="profile-heading">
              <div>
                <h1>{user.username}</h1>

                <p className="profile-name">
                  {user.firstName} {user.lastName}
                </p>
              </div>

              <button
                className="settings-btn"
                onClick={() => navigate("/profile/settings")}
              >
                <Settings size={18} />
                Settings
              </button>
            </div>

            <p
              className="profile-bio"
              contentEditable
              suppressContentEditableWarning
              onInput={onChangeBio}
              ref={userBio}
            >
              {user.bio || "No bio yet."}
            </p>
          </div>
        </div>

        <div className="profile-stats">
          <div className="profile-stat">
            <strong>0</strong>
            <span>Posts</span>
          </div>

          <div className="profile-stat">
            <strong>0</strong>
            <span>Followers</span>
          </div>

          <div className="profile-stat">
            <strong>0</strong>
            <span>Following</span>
          </div>
        </div>
      </section>

      <section className="posts-section">
        <h2>Posts</h2>
        <button onClick={openCreatePost}>Add new post</button>
        {isCreatePostOpen && (
          <div className="create-post-overlay">
            <div className="create-post-modal">
              <AddPost closeCreatePost={closeCreatePost} />
            </div>
          </div>
        )}

        <div className="empty-posts">
          {!userProfile ? <p>No posts yet.</p> : userProfile.posts.map(post => {
            return <ShowPosts key={post.id} post={post} onPostDeleted = {onPostDeleted}/> 
          })}
        </div>
      </section>
    </main>
  );
};
