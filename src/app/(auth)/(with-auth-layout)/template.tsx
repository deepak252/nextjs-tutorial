"use client";

import React, { useState } from "react";

export default function WithAuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [value, setValue] = useState("");
  // State will not preserved for this template on auth navigation
  return (
    <div>
      <input
        placeholder="Template Input"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border"
      ></input>
      {children}
    </div>
  );
}
