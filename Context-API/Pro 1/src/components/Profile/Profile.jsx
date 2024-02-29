import React, { useContext } from "react";
import UserContext from "../../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  return (
    <div>{user ? <h1>Welcome {user.userName}</h1> : <h1>Login please</h1>}</div>
  );
};

export default Profile;
