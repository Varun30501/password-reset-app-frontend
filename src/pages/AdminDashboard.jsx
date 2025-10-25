import React, { useEffect, useState } from "react";
import API from "../api";
import { toast } from "react-toastify";

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await API.get("/users", {
                headers: { Authorization: `Bearer ${token}` },
            });
            setUsers(response.data);
        } catch (error) {
            toast.error("Failed to load users");
        }
    };

    return (
        <div className="w-full bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Admin Dashboard
            </h2>
            <p className="text-gray-500 mb-6">
                Welcome, {user?.username || "Admin"} — manage all registered users.
            </p>

            {/* ✅ Scrollable Table */}
            <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="min-w-full text-sm text-left border-collapse">
                    <thead className="bg-gray-100 border-b text-gray-700 uppercase text-xs">
                        <tr>
                            <th className="p-3 font-semibold">#</th>
                            <th className="p-3 font-semibold">Username</th>
                            <th className="p-3 font-semibold">Email</th>
                            <th className="p-3 font-semibold">Role</th>
                            <th className="p-3 font-semibold">Reset Token</th>
                            <th className="p-3 font-semibold">Expiry</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 ? (
                            users.map((u, i) => (
                                <tr
                                    key={u._id}
                                    className="border-b last:border-none hover:bg-gray-50 transition"
                                >
                                    <td className="p-3">{i + 1}</td>
                                    <td className="p-3">{u.username}</td>
                                    <td className="p-3">{u.email}</td>
                                    <td className="p-3 capitalize">{u.role}</td>
                                    <td className="p-3 truncate max-w-[220px] text-gray-500">
                                        {u.resetToken || "—"}
                                    </td>
                                    <td className="p-3 text-gray-500">
                                        {u.resetTokenExpiry
                                            ? new Date(u.resetTokenExpiry).toLocaleString()
                                            : "—"}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="6"
                                    className="text-center py-6 text-gray-400 italic"
                                >
                                    No users found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Footer Summary */}
            <div className="mt-6 text-sm text-gray-500 flex justify-between items-center">
                <p>Total Users: {users.length}</p>
                <p className="italic">Admin Panel • Password Reset System</p>
            </div>
        </div>
    );
};

export default AdminDashboard;
