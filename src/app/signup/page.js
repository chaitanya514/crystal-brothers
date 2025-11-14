"use client";
import { useState, useEffect } from "react";
import { auth, db } from "../lib/firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  onAuthStateChanged,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { doc, setDoc } from "firebase/firestore";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;

      await sendEmailVerification(user);
      setShowModal(true); // Show verification modal

      await setDoc(doc(db, "users", user.uid), {
        firstName,
        lastName,
        email,
        createdAt: new Date(),
        emailVerified: false,
      });

      checkVerificationStatus(); // Start checking if user verified
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  // ✅ Check email verification every 3 seconds
  const checkVerificationStatus = () => {
    const interval = setInterval(async () => {
      await auth.currentUser.reload();
      if (auth.currentUser.emailVerified) {
        clearInterval(interval);
        router.push("/"); // Redirect only after email verified ✅
      }
    }, 3000);
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
            Email is already registered
          </p>
        )}

        <div className="space-y-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5"
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email address"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`mt-6 w-full cursor-pointer text-white font-medium py-2.5 rounded-lg transition-all ${
            loading ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {loading ? "Creating Account..." : "Sign Up"}
        </button>
      </form>

      {/* ✅ Modal  */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="bg-white shadow-lg rounded-xl p-6 w-80 text-center">
            <h3 className="text-lg font-semibold">Verify Your Email</h3>
            <p className="text-sm text-gray-600 mt-2">
              We’ve sent a verification link to <strong>{email}</strong>.<br />
              Please verify to continue.
            </p>
            <div className="mt-4 animate-spin border-4 border-green-600 border-t-transparent rounded-full w-10 h-10 mx-auto"></div>
          </div>
        </div>
      )}
    </div>
  );
}
