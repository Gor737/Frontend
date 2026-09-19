import {
  useContext,
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
} from "react";
import "./PrivateHeader.css";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { SearchUser } from "../../services/accounts";
import type { User } from "../../types/account";
import { SearchUserItem } from "../componnets/SearchUserItem";
import { DEFAULT_AVATAR } from "../../helpers/constants";

type Props = {
  isSearchOpen: boolean;
  openSearch: () => void;
}

export const PrivateHeader = ({isSearchOpen, openSearch}:Props) => {

  const privateContext = useContext(AuthContext);
  if (!privateContext) throw new Error("Can not find user");
  const user = privateContext.user;
  if (!user) throw new Error("Cannot find User");

  const [search, setSearch] = useState<string>("");
  const [users, setUsers] = useState<User[]>([]);
  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted.current) {
      isMounted.current = false;
      return;
    }
    if (!search.trim()) return;

    const timer = setTimeout(async () => {
      const response = await SearchUser(search);
      setUsers(response.users);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  const onSearching = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value.trim()) setUsers([]);
    setSearch(event.target.value);
  };

  return (
    <header className="private-header">
      <div className="private-header__logo">
        Nela<span>gram</span>
      </div>

      <div className="private-header__search">
        <input
          type="text"
          placeholder="Search users..."
          onChange={onSearching}
          onFocus={openSearch}
        />

        <div className="private-header__search-results">
          {users.map((user) => {
            return <SearchUserItem key={user.id} user={user} />;
          })}
        </div>
      </div>

      <div className="private-header__user">
        <div className="private-header__avatar">
          <img
            src={
              user.avatar
                ? `http://localhost:4002/${user.avatar}`
                : DEFAULT_AVATAR
            }
            alt="User avatar"
          />
        </div>

        <span className="private-header__username">{user?.username}</span>

        <button
          className="private-header__logout"
          onClick={privateContext.onLogout}
        >
          Logout
        </button>
      </div>
    </header>
  );
};
