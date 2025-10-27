import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api";
import { toast } from "react-toastify";

const ResetPassword = () => {
    const { token } = useParams();
    const navigate = useNavigate();
    const [newPassword, setNewPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [resetDone, setResetDone] = useState(false);

    const handleReset = async (e) => {
        e.preventDefault();
        if (!token) {
            toast.error("Invalid or missing reset token");
            return;
        }

        try {
            setLoading(true);
            const response = await API.post("/reset-password", { token, newPassword });

            toast.success(response.data?.message || "Password reset successful!");
            setResetDone(true); // ✅ show success UI
        } catch (err) {
            toast.error(err.response?.data?.message || "Invalid or expired link");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 text-center">
                {!resetDone ? (
                    <>
                        <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                            Reset Password 🔒
                        </h2>
                        <p className="text-gray-500 mb-6">
                            Enter your new password below.
                        </p>

                        <form onSubmit={handleReset} className="space-y-5">
                            <div>
                                <label className="block text-left text-gray-700 mb-1">
                                    New Password
                                </label>
                                <input
                                    type="password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    required
                                    placeholder="Enter new password"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full text-white font-medium py-2 rounded-lg transition ${loading
                                        ? "bg-gray-400 cursor-not-allowed"
                                        : "bg-blue-600 hover:bg-blue-700"
                                    }`}
                            >
                                {loading ? "Resetting..." : "Reset Password"}
                            </button>
                        </form>
                    </>
                ) : (
                    // ✅ Success UI
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold text-green-600 mb-3">
                            ✅ Password Reset Successful!
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Your password has been updated successfully.
                            You can now log in with your new password.
                        </p>

                        <button
                            onClick={() => navigate("/login")}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition"
                        >
                            Go to Login
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ResetPassword;
