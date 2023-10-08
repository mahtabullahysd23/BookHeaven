import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../../Store/Slices/userSlice";
import "./ProfileNameMolecule.style.scss";
import { useNavigate } from "react-router-dom";
import {
  SlUser,
  SlPresent,
  SlWallet,
  SlSettings,
  SlLogout,
} from "react-icons/sl";

const ProfileName = ({ username, profileImage }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const dispatch = useDispatch();

  return (
    <div className="profile-dropdown">
      <div className="profile-info" onClick={toggleDropdown}>
        <img src={profileImage} alt="Profile" className="profile-image" />
        <span className="profile-name">{username}</span>
      </div>
      {isOpen && (
        <div className="dropdown-content">
          <div className="dropdown-list">
            <div className="options flex-start gap-1">
              <SlUser />
              Profile
            </div>
            <div className="options flex-start gap-1">
              <SlPresent />
              My Orders
            </div>
            <div className="options flex-start gap-1">
              <SlWallet />
              My Wallet
            </div>
            <div className="options flex-start gap-1">
              <SlSettings />
              Settings
            </div>
            <div
              className="options flex-start gap-1"
              onClick={() => {
                dispatch(deleteUser());
                localStorage.removeItem("token");
                navigate("/signin");
              }}
            >
              <SlLogout />
              Log Out
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileName;
