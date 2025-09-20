"use client";

import React, { ChangeEvent, useState } from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import Card from "../../components/card";
import { useRouter } from "next/navigation";
import { signup } from "../../services/auth";

interface RegisterValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function RegisterPage() {
  const router = useRouter();

  const [values, setValues] = useState<RegisterValues>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleRegister = async () => {
    if (!values.username || !values.email || !values.password) {
      alert("All fields are required");
      return;
    }

    if (values.password !== values.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await signup(values.username,values.email,values.password,values.confirmPassword);

      const data = response;
      console.log("Register success:", data);

      alert("Registration successful! Redirecting to login...");
      router.push("/login");
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error during registration:", error.message);
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <div className="flex justify-center items-center h-[calc(100vh-3rem)]">
      <Card>
        <h2 className="text-2xl mb-4 text-center">Sign Up</h2>

        <h5 className="text-base">Username:</h5>
        <Input
          name="username"
          value={values.username}
          className="mb-2"
          onChange={handleChange}
        />

        <h5 className="text-base">Email:</h5>
        <Input
          type="email"
          name="email"
          value={values.email}
          className="mb-2"
          onChange={handleChange}
        />

        <h5 className="text-base">Password:</h5>
        <Input
          type="password"
          name="password"
          value={values.password}
          className="mb-2"
          onChange={handleChange}
        />

        <h5 className="text-base">Confirm Password:</h5>
        <Input
          type="password"
          name="confirmPassword"
          value={values.confirmPassword}
          className="mb-2"
          onChange={handleChange}
        />

        <br />
        <div className="flex gap-4 justify-center">
          <Button onClick={handleRegister}>Register</Button>
          <Button onClick={handleLogin}>Login</Button>
        </div>
      </Card>
    </div>
  );
}
