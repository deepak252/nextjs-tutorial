"use client";

import { useState } from "react";

function Dashboard() {
  const [name, setName] = useState("");
  /**
   * If Navigating directly to this page: this log will get printed on both server and browser (client)
   * If navigating from another page: this log will get printed only on browswer (client)
   */
  console.log("Dashboard Serer Component");

  return (
    <div>
      <h3>Dashboard</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default Dashboard;
