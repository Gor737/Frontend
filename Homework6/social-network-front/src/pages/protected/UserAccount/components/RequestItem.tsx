import { DEFAULT_AVATAR } from "../../../../helpers/constants";
import { acceptFollowRequest, declineFollowRequest } from "../../../../services/accounts";
import type { Requests } from "../../../../types/account";

type Props = {
  request: Requests;
  getRequests: () => Promise<void>;
};
export const RequestItem = ({ request, getRequests }: Props) => {
  const sender = request.sender;
  const handleAccept = async() => {
    await acceptFollowRequest(request.id);
    await getRequests();
  }

  const handleDecline = async() => {
    await declineFollowRequest(request.id);
    await getRequests();
  }

  return (
    <div>
      <img
        src={
          sender.avatar
            ? `http://localhost:4002/${sender.avatar}`
            : DEFAULT_AVATAR
        }
      />
      <h4>
        {sender.firstName} {sender.lastName}
      </h4>
      <p>@{sender.username}</p>
      <button onClick={handleAccept}>Accept request</button>
      <button onClick={handleDecline}>Decline request</button>
    </div>
  );
};
