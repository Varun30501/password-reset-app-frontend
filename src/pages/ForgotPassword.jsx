import React, { useState } from "react";
import API from "../api";
import { toast } from "react-toastify";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await API.post("/forgot-password", { email });
            toast.success("Password reset link sent to your email!");
        } catch (err) {
            toast.error(err.response?.data?.message || "Error sending reset link");
        }
    };

    return (
        <div className="relative flex items-center justify-center h-screen overflow-hidden">
            <div className="absolute inset-0 bg-gray-100" />
            <div className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-center mb-2">
                    Forgot Password 🔑
                </h2>
                <p className="text-gray-500 text-center mb-6">
                    Enter your email to receive a password reset link.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="example@email.com"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition"
                    >
                        Send Reset Link
                    </button>
                </form>

                <div className="text-center mt-6">
                    <a href="/login" className="text-blue-600 text-sm hover:underline">
                        Back to Login
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
