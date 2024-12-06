import React, { ReactNode } from "react";
import { ClientNavbar, ClientSidebar } from "./_components";

export default function ClientDashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      {/* <div className="fixed top-0 w-full z-40 border-b border-ash"> */}
      <ClientNavbar />
      {/* </div> */}

      <div className="flex-1 pt-14">
        {/* Sidebar */}
        <aside className="hidden lg:block fixed h-screen bg-white">
          <ClientSidebar />
        </aside>

        {/* Main Content */}
        <main className="bg-[#f6f6f6] lg:ml-64 p-4 h-full z-2">{children}</main>
      </div>
    </div>
  );
}
