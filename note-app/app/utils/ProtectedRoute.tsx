"use client";

import { useRouter } from "next/navigation";

export default function ProtectedRoute({children}:{children:React.ReactNode}) {
    const router = useRouter();
    const isAuthenticated = localStorage.getItem('access-token'); 

    if (!isAuthenticated) {
        router.replace("/login"); 
    }

    return <>{children}</>;
}