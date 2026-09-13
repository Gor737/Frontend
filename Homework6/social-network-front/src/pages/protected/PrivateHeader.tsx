import { useContext } from "react";
import "./PrivateHeader.css";
import { AuthContext } from "../../context/AuthContext/AuthContext";

export const PrivateHeader = () => {
    const privateContext = useContext(AuthContext);
    if(!privateContext) throw new Error('Can not find user');
    const user = privateContext.user;
    if(!user) throw new Error("Cannot find User");


  return (
    <header className="private-header">
      <div className="private-header__logo">
        Nela<span>gram</span>
      </div>

      <div className="private-header__user">
        <div className="private-header__avatar">
          <img
            src={
                  user.avatar
                    ? `http://localhost:4002/${user.avatar}`
                    : "https://i.pravatar.cc/150"
                }
            alt="User avatar"
          />
        </div>

        <span className="private-header__username">
          {user?.username}
        </span>

        <button className="private-header__logout" onClick={privateContext.onLogout}>
          Logout
        </button>
      </div>
    </header>
  );
};