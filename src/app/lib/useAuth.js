import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return { user, logout: () => signOut(auth) };
}


// hooks/useAuth.js (recommended location for clarity)
// import { useEffect, useState } from "react";
// import { auth } from "@/lib/firebase"; // adjust import path if needed
// import { onAuthStateChanged, signOut } from "firebase/auth";

// export function useAuth() {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true); // track init state

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setLoading(false); // stop loading after first check
//     });

//     return () => unsubscribe();
//   }, []);

//   const logout = async () => {
//     await signOut(auth);
//   };

//   return { user, loading, logout };
// }

