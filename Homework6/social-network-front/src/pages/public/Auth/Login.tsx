import { useForm } from "react-hook-form";
import type { SignInType } from "../../../types/auth";
import { signIn } from "../../../services/auth";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext/AuthContext";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInType>();

  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  const onSubmit = async (data: SignInType) => {
    try {
      const { token } = await signIn(data);
      localStorage.setItem("authorization", `Bearer ${token}`);
      await authContext?.updateUser();
      navigate("/profile");
    } catch (err) {}
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <span className="login-logo">N</span>
          <h1>Welcome back</h1>
          <p>Sign in to continue to your account</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              {...register("username", { required: "please fill username" })}
              id="username"
              type="text"
              placeholder="Enter username"
            />
            {errors.username && (
              <span className="error-message">{errors.username.message}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              {...register("password", { required: "please fill password" })}
              id="password"
              type="password"
              placeholder="Enter password"
            />
            {errors.password && (
              <span className="error-message">{errors.password.message}</span>
            )}
          </div>

          <button className="login-button" type="submit">
            Login
            <span>→</span>
          </button>
        </form>

        <div className="login-footer">
          <span>Don't have an account?</span>
          <button type="button" onClick={() => navigate("/register")}>
            Create account
          </button>
        </div>
      </div>
    </div>
  );
};
