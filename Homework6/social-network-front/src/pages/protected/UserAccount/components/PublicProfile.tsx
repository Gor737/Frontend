import { useState } from "react";
import { DEFAULT_AVATAR } from "../../../../helpers/constants";
import { followUser } from "../../../../services/accounts";
import type { Profile, UserProfile } from "../../../../types/account";
import { ShowPosts } from "./ShowPosts";

type Props = {
  visitedUser: Profile;
};

export const PublicProfile = ({ visitedUser }: Props) => {
  const [status, setStatus] = useState<string | null>(null);
  const handleFollow = async () => {
    const response = await followUser(visitedUser.id);
    setStatus(response.status);
  };

  return (
    <div>
      <img
        src={
          visitedUser.avatar
            ? `http://localhost:4002/${visitedUser.avatar}`
            : DEFAULT_AVATAR
        }
      />
      <h4>
        {visitedUser.firstName} {visitedUser.lastName}
      </h4>
      <p>@{visitedUser.username}</p>
      <p>{visitedUser.bio}</p>
      <div>{visitedUser.followers.length} Followers</div>
      <div>{visitedUser.followings.length} Followings</div>
      <div>{visitedUser.posts.length} Posts</div>
      <button onClick={handleFollow}>
        {!status ? "Follow" : "Unfollow"}
      </button>
      {visitedUser.posts.map((post) => {
        return <ShowPosts key={post.id} post={post} />;
      })}
    </div>
  );
};
