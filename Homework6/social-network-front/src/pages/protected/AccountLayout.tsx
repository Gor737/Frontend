import { Outlet } from "react-router-dom";
import { PrivateHeader } from "./PrivateHeader";
import { useState } from "react";
import './AccountLayout.css'

export const AccountLayout = () => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const openSearch = () => {
    setIsSearchOpen(true);
  }
  const closeSearch = () => {
    setIsSearchOpen(false);
  }

  return (
    <div>
      <PrivateHeader 
      isSearchOpen = {isSearchOpen}
      openSearch = {openSearch}
      />
      <div className={`account-content ${isSearchOpen ? "search-open" : ""}`}>
         <div onClick={closeSearch} className="account-overlay"></div>
        <Outlet />
      </div>
    </div>
  );
};
