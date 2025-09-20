"use client";

import React from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import Card from "../../components/card";
import { ChangeEvent } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();

    const [values, setValues] = React.useState({
        username: "",
        password: ""
    });

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setValues(prevState=>({...prevState, username: e?.target?.value}));
        console.log(e?.target?.value);
    }

    const handleLogin = () => {
         
    }

    const handleRegister = () => {
        router.push('/register');
    }

    return <div className="flex justify-center items-center h-[calc(100vh-3rem)]"><Card>
        <h2 className="text-2xl mb-4 text-center">Login</h2>
        <h5 className="text-base">Enter Username: </h5>
        <Input name="User Name" value={values.username} className="mb-4" onChange={handleChange}/>
        <h5 className="text-base">Enter Password: </h5>
        <Input name="" value={values.password} className="mb-2" onChange={handleChange}/>
        <br/>
        <div className="flex gap-4 justify-center">
        <Button onClick={handleLogin}>Login</Button>
        <Button onClick={handleRegister}>Register</Button>
        </div>
        </Card></div>
  }