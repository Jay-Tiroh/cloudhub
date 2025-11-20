// src/components/Auth/AuthLayout.tsx

import Image from "next/image";
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  // Determine if the current theme is dark or light (you would typically use a context/hook for this)
  const isDark = true; // Assuming dark mode based on the prominent examples

  return (
    <div
      className={`min-h-screen flex flex-col justify-center items-center p-4 `}
    >
      <div className="mb-8">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={120}
          height={120}
          className="dark:invert w-40"
        />
      </div>
      <div className="w-full max-w-md">{children}</div>
    </div>
  );
};

export default AuthLayout;
