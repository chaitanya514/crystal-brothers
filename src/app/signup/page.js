"use client";
import { useState } from "react";
import { auth } from "../lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Signup() {

  const [firstName,setFirstName] =useState("")
  const [lastName,setLastName] =useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("User created successfully!");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 px-4">
      <form
        onSubmit={handleSignup}
        className="w-full max-w-sm bg-white/90 backdrop-blur shadow-xl rounded-2xl p-8 border border-green-100"
      >
        <h2 className="text-2xl font-semibold text-center text-green-800 mb-6">
          Create Account
        </h2>

        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">
            {error && "e-mail address is already registered"}
          </p>
        )}

        <div className="space-y-4">
        <input
            type="firstName"
            placeholder="First Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-green-300 outline-none text-sm"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="lastName"
            placeholder="Last Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-green-300 outline-none text-sm"
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email address"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-green-300 outline-none text-sm"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-green-300 outline-none text-sm"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 rounded-lg transition-all"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
