import { useNavigate } from "react-router-dom";
import type { User } from "../../types/account";
import "./SearchUserItem.css";
import { DEFAULT_AVATAR } from "../../helpers/constants";

type Prop = {
  user: User;
};

export const SearchUserItem = ({ user }: Prop) => {
  const navigate = useNavigate();
  return (
    <div className="search-user-item" onClick={() => navigate(`/profile/${user.username}`)}>
      <div className="search-user-item__avatar">
        <img
          src={
            user.avatar
              ? `http://localhost:4002/${user.avatar}`
              : DEFAULT_AVATAR
          }
          alt={`${user.username} avatar`}
        />
      </div>

      <div className="search-user-item__info">
        <p className="search-user-item__username">
          @{user.username}
        </p>

        <p className="search-user-item__name">
          {user.firstName} {user.lastName}
        </p>
      </div>
    </div>
  );
};