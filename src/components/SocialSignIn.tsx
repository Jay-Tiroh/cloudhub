// src/components/Auth/SocialSignIn.tsx

import React from "react";

const SocialSignIn: React.FC = () => {
  return (
    <div className="space-y-3">
      <button
        type="button"
        className="w-full flex justify-center items-center py-2 px-4 border border-gray-700 rounded-lg text-sm font-medium text-white hover:bg-gray-800 transition duration-150"
      >
        {/* Placeholder for Google Icon */}
        <span className="mr-2">G</span>
        Sign in with Google
      </button>
      <button
        type="button"
        className="w-full flex justify-center items-center py-2 px-4 border border-gray-700 rounded-lg text-sm font-medium text-white hover:bg-gray-800 transition duration-150"
      >
        {/* Placeholder for Apple Icon */}
        <span className="mr-2"></span>
        Sign in with Apple
      </button>
    </div>
  );
};

export default SocialSignIn;
