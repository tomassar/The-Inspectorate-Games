import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div>
      Admin Dashboard
      <Link to="/admin/create-question">Create question</Link>
    </div>
  );
};

export default AdminDashboard;
