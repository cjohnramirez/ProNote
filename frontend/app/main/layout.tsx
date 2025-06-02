"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import MainSideBar from "@/containers/main/main-sidebar";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import React from "react";

export default function Main({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(true);

  return (
    <SidebarProvider open={open} onOpenChange={setOpen}>
      <MainSideBar />
      <main className="p-8">
        {open == true ? (
          <PanelLeftClose
            onClick={() => {
              setOpen(!open);
            }}
            className="mt-3"
          />
        ) : (
          <PanelLeftOpen
            onClick={() => {
              setOpen(!open);
            }}
            className="mt-3"
          />
        )}
        {children}
      </main>
    </SidebarProvider>
  );
}
