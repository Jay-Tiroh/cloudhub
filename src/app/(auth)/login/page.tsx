"use client";
import AuthLayout from "@/components/AuthLayout";
import SignInForm from "@/components/SignInForm";
import SocialSignIn from "@/components/SocialSignIn";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signing in with:", { email, password });
    // Add your sign-in logic here
  };
  return (
    <AuthLayout>
      <div className="bg-grey-900 p-8 rounded-xl shadow-2xl space-y-8 border border-grey-700">
        <div>
          <h2 className="text-2xl font-extrabold text-white text-center">
            Sign In
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            New to Cloudhub?{" "}
            <Link
              href="/signup"
              className="font-medium text-orange-500 hover:text-orange-400"
            >
              Sign up
            </Link>
          </p>
        </div>

        <SocialSignIn />

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 text-grey-400">or</span>
          </div>
        </div>

        <SignInForm />
      </div>
    </AuthLayout>
  );
};

export default page;
