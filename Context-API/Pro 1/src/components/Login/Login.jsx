import React, { useState, useContext } from "react";
import UserContext from "../../context/UserContext";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ userName, userPassword });
  };

  return (
    <div>
      <h2>Login</h2>
      <label>Username</label>
      <input
        type="text"
        placeholder="username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <label>Password</label>
      <input
        type="password"
        placeholder="password"
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Login;
