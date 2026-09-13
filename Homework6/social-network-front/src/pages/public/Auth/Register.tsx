import { useForm } from "react-hook-form";
import type { SignUptype } from "../../../types/auth";
import { signUp } from "../../../services/auth";
import { useNavigate } from "react-router-dom";
import "./Register.css";

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUptype>();

  const navigate = useNavigate();

  const onSubmit = async (data: SignUptype) => {
    try {
      const response = await signUp(data);
      console.log(response);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="register-page">
      <div className="register-card">

        <div className="register-header">
          <span className="register-logo">N</span>

          <h1>Create account</h1>
          <p>Join us and create your account</p>
        </div>

        <form
          className="register-form"
          onSubmit={handleSubmit(onSubmit)}
        >

          <div className="form-group">
            <label htmlFor="firstName">First Name</label>

            <input
              {...register("firstName", {
                required: "Please fill first name",
              })}
              id="firstName"
              type="text"
              placeholder="Enter first name"
            />

            {errors.firstName && (
              <span className="error-message">
                {errors.firstName.message}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>

            <input
              {...register("lastName", {
                required: "Please fill last name",
              })}
              id="lastName"
              type="text"
              placeholder="Enter last name"
            />

            {errors.lastName && (
              <span className="error-message">
                {errors.lastName.message}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="username">Username</label>

            <input
              {...register("username", {
                required: "Please fill username",
              })}
              id="username"
              type="text"
              placeholder="Enter username"
            />

            {errors.username && (
              <span className="error-message">
                {errors.username.message}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>

            <input
              {...register("password", {
                required: "Please fill password",
              })}
              id="password"
              type="password"
              placeholder="Enter password"
            />

            {errors.password && (
              <span className="error-message">
                {errors.password.message}
              </span>
            )}
          </div>

          <button className="register-button" type="submit">
            Create account
            <span>→</span>
          </button>

        </form>

        <div className="register-footer">
          <span>Already have an account?</span>

          <button
            type="button"
            onClick={() => navigate("/login")}
          >
            Sign in
          </button>
        </div>

      </div>
    </div>
  );
};