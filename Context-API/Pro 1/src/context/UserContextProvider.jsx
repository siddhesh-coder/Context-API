import React, { useEffect, useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(()=>{
    const getUser = localStorage.getItem('user');
    return getUser ? JSON.parse(getUser) : null;
  });

  useEffect(()=>{
    localStorage.setItem('user', JSON.stringify(user));
  },[user])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
