import React from "react";
import SideNav from "./_components/SideNav";
import TopHeader from "./_components/TopHeader";

export default function layout({ children }) {
  return (
    <div>
      <div className="hidden h-full w-64 md:flex flex-col fixed inset-y-0 z-50">
        <SideNav />
      </div>
      <div className="md:ml-64">
        <TopHeader />
        {children}
      </div>
    </div>
  );
}
