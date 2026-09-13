import { useForm } from "react-hook-form";
import type { ChangePassword } from "../../../types/account";
import "./Settings.css";
import { changePassword, changePrivacy } from "../../../services/accounts";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext/AuthContext";
import { Lock, LockOpen } from "lucide-react";

export const Settings = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) throw new Error("can not find user");
  const user = authContext.user;
  if (!user) throw new Error("Con not find user");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ChangePassword>();

  const onsubmit = async (data: ChangePassword) => {
    try {
      await changePassword(data);
      reset();
    } catch (err) {
      console.log(err);
    }
  };

  const updatePrivacy = async () => {
    try {
      await changePrivacy();
      await authContext.updateUser();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="settings">
      <div className="settings-card">
        <h2>Change Password</h2>
        <p className="settings-description">
          Update your password to keep your account secure.
        </p>

        <form onSubmit={handleSubmit(onsubmit)}>
          <div className="form-group">
            <label htmlFor="currentPassword">Current password</label>

            <input
              type="password"
              id="currentPassword"
              placeholder="Enter your current password"
              {...register("currentPassword", {
                required: "Please fill current password",
              })}
            />

            {errors.currentPassword && (
              <span className="error">{errors.currentPassword.message}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="newPassword">New password</label>

            <input
              type="password"
              id="newPassword"
              placeholder="Enter your new password"
              {...register("newPassword", {
                required: "Please fill new password",
              })}
            />

            {errors.newPassword && (
              <span className="error">{errors.newPassword.message}</span>
            )}
          </div>

          <button type="submit" className="change-password-btn">
            Change Password
          </button>
        </form>

        <h2>Account Pravicy</h2>
        <button className="privacy-btn" onClick={updatePrivacy}>
          {user.isAccountPrivate ? <Lock /> : <LockOpen />}
        </button>
      </div>
    </div>
  );
};
