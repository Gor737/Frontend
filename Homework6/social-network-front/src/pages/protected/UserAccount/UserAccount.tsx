import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Profile, UserProfile } from "../../../types/account";
import { getUserProfile } from "../../../services/accounts";
import { PrivateProfile } from "./components/PrivateProfile";
import { PublicProfile } from "./components/PublicProfile";

export const UserAccount = () => {
  const { username } = useParams();
  const [visitedUser, setVisitedUser] = useState<Profile | null>(null);

  const fetchUser = async (username:string) => {
    const res = await getUserProfile(username!);
    setVisitedUser(res.user);
  };

  useEffect(() => {
    if (!username?.trim()) return;
    fetchUser(username);
  }, [username]);

  if (!visitedUser) return <div>Loading...</div>;

  return visitedUser.isAccountPrivate ? (
    <PrivateProfile visitedUser={visitedUser} />
  ) : (
    <PublicProfile visitedUser={visitedUser} />
  );
};
