"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const navLinks = [
  { name: "Login", href: "/login" },
  { name: "Register", href: "/register" },
];

export default function WithAuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [value, setValue] = useState("");
  // State will be preserved for this layout on auth navigation
  return (
    <div>
      {navLinks.map(({ name, href }) => {
        const isActive = pathname.startsWith(href);
        return (
          <Link
            key={name}
            href={href}
            className={isActive ? "font-bold" : "font-normal"}
          >
            {name}
          </Link>
        );
      })}
      <h4>Login/Register Group Layout</h4>
      <input
        placeholder="Layout Input"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border"
      ></input>
      {children}
    </div>
  );
}
