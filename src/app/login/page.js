"use client";
import { useState } from "react";
import { auth } from "../lib/firebase";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [forgotMode, setForgotMode] = useState(false);
  const [toast, setToast] = useState("");

  const router = useRouter();

  // Login handler
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setToast("Login successful!");
      setTimeout(() => setToast(""), 2000);
      router.push("/");
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  // Forgot password handler
  const handleReset = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await sendPasswordResetEmail(auth, email);
      setToast("Reset link sent! Redirecting to login...");
      setTimeout(() => {
        setToast("");
        setForgotMode(false);
        setEmail("");
      }, 2000);
    } catch (err) {
      setError("Failed to send reset email");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 px-4">
      <div className="w-full max-w-sm bg-white/90 backdrop-blur shadow-xl rounded-2xl p-8 border border-green-100">
        <h2 className="text-2xl font-semibold text-center text-green-800 mb-6">
          {forgotMode ? "Reset Password" : "Login"}
        </h2>

        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
        {toast && <p className="text-green-600 text-sm mb-4 text-center">{toast}</p>}

        {!forgotMode ? (
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-green-300 outline-none text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-green-300 outline-none text-sm pr-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 rounded-lg transition-all ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Loading..." : "Login"}
            </button>

            <p
              className="text-sm text-green-700 hover:underline cursor-pointer text-center mt-2"
              onClick={() => setForgotMode(true)}
            >
              Forgot Password?
            </p>

            <p className="text-center text-sm text-gray-600 mt-4">
              Don’t have an account?{" "}
              <a href="/signup" className="text-green-700 hover:underline">
                Sign up
              </a>
            </p>
          </form>
        ) : (
          // Forgot password form
          <form onSubmit={handleReset} className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-green-300 outline-none text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              disabled={loading}
              className={`mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 rounded-lg transition-all ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Sending..." : "Send Reset Link"}
            </button>
            <p
              className="text-sm text-gray-500 hover:underline cursor-pointer text-center mt-2"
              onClick={() => setForgotMode(false)}
            >
              Back to Login
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
