import { useNavigate } from "react-router-dom";
import "./PublicHeader.css";

export const PublicHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="public-header">
      <div className="public-header__container">
        <button
          className="public-header__logo"
          onClick={() => navigate("/")}
        >
          <span>Nelagram</span>
          <span className="public-header__logo-dot">.</span>
        </button>

        <nav className="public-header__nav">
            <button onClick={() => navigate("/")}>
                Home
            </button>

          <button onClick={() => navigate("/login")}>
            Login
          </button>

          <button
            className="public-header__register"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </nav>
      </div>
    </header>
  );
};