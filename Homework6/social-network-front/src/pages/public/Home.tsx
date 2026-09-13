import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      Home page
      <button>Login
        <Link to={'/login'}>Logiin</Link>
      </button>
      <button>Register
        <Link to={'/register'}>Register</Link>
      </button>
    </div>
  );
};
