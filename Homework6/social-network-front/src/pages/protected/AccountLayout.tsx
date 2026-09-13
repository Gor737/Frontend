import { Outlet } from "react-router-dom";
import { PrivateHeader } from "./PrivateHeader";

export const AccountLayout = () => {
  return (
    <div>
      <PrivateHeader />
      <Outlet />
    </div>
  );
};
