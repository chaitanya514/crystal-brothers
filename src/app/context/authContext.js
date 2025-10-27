
"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "../lib/useAuth";

const AuthContext = createContext();

export const UserAuthProvider = ({ children }) => {
  const { user, loading } = useAuth();

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthUser = () => useContext(AuthContext);