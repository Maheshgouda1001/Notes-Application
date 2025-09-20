"use client";
import { usePathname } from "next/navigation";

import React from "react";

const BreadCrumbs = ({Items}:{Items:string[]}) => {
    const pathname = usePathname();

    return (
        <div className="breadcrumbs text-sm mb-4 p-2">
            <ul>
                {Items.map((child, index)=>(
                    <span key={index}>{child}{index !== Items.length-1 && '/'}</span>
                ))}
            </ul>
        </div>
    );
}

export default BreadCrumbs;