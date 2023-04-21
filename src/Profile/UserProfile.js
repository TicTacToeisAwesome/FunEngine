// FunEngine/src/Profile/UserProfile.js
import React, { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

const UserProfile = () => {
  const { userData } = useContext(AuthContext);

  return (
    <div>
      <h1>User Profile</h1>
      {userData && (
        <div>
          <p>Username: {userData.username}</p>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
