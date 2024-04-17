"use client";

import { Upload, File, Shield } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

function SideNav() {
  const [activeIndex, setActiveIndex] = useState(0);

  const menuList = [
    {
      id: 1,
      icon: Upload,
      name: "Upload",
      path: "/upload",
    },
    {
      id: 2,
      icon: File,
      name: "Files",
      path: "/files",
    },
    {
      id: 3,
      icon: Shield,
      name: "Upgrade",
      path: "/upgrade",
    },
  ];
  return (
    <div>
      <div className="p-5 border-b">
        <Image src="/logo.svg" width={40} height={40} />
      </div>
      <div className="flex flex-col float-left w-full">
        {" "}
        {menuList.map((item, index) => (
          <button
            className={`flex gap-2 p-4 px-0 hover:bg-gray-100 w-full text-gray-500 ${
              activeIndex == index ? "bg-blue-50 text-blue-700" : null
            }`}
            key={item.id}
            onClick={() => setActiveIndex(index)}
          >
            <item.icon />
            <h2>{item.name}</h2>
          </button>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
