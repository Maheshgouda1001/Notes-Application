"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({children}:{children:React.ReactNode}) {
    const router = useRouter();
    useEffect(() => {
    const isAuthenticated = localStorage.getItem('access-token'); 

    if (!isAuthenticated) {
        router.replace("/login"); 
    }
    }, [router]);
    return <>{children}</>;
}