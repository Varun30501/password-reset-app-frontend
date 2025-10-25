import React, { useState } from "react";
import API from "../api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const { data } = await API.post("/login", { email, password });
            if (!data || !data.user) {
                toast.error("Invalid server response");
                return;
            }

            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));

            toast.success("Login successful!");
            navigate(data.user.role === "admin" ? "/admin" : "/dashboard");
        } catch (err) {
            toast.error(err.response?.data?.message || "Invalid credentials");
        }
    };

    return (
        <div className="relative flex items-center justify-center h-screen overflow-hidden">
            <div className="absolute inset-0 bg-gray-100" />
            <div className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-center mb-2 text-gray-800">
                    Welcome Back 👋
                </h2>
                <p className="text-gray-500 text-center mb-6">
                    Login to your account
                </p>

                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <label className="block text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="you@example.com"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="••••••••"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition"
                    >
                        Login
                    </button>
                </form>

                <div className="flex justify-between mt-6 text-sm">
                    <a href="/forgot-password" className="text-blue-600 hover:underline">
                        Forgot Password?
                    </a>
                    <a href="/signup" className="text-blue-600 hover:underline">
                        Create Account
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Login;
