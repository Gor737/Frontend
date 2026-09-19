import { useEffect, useState } from "react";
import type { FollowRequestsRes } from "../../../../types/account";
import { getFollowRequests } from "../../../../services/accounts";
import { RequestItem } from "./RequestItem";

export const FollowRequets = () => {
  const [requests, setRequests] = useState<FollowRequestsRes | null>(null);

  const getRequests = async () => {
    const res = await getFollowRequests();
    setRequests(res);
    console.log(res);
  };
  useEffect(() => {
    getRequests();
  }, []);

  if (!requests) return <div>Loading...</div>;

  return requests.requests.map((req) => {
    return <RequestItem key={req.id} request={req} getRequests = {getRequests}/>;
  });
};
