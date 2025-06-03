"use client";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import MainSideBar from "@/containers/main/main-sidebar";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import React from "react";

export default function Main({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(true);

  return (
    <SidebarProvider open={open} onOpenChange={setOpen}>
      <MainSideBar />
      <SidebarInset>
        <main className="m-8 h-full bg-dark-violet rounded-2xl border-1 border-muted-nocolor">
          {open == true ? (
            <PanelLeftClose
              onClick={() => {
                setOpen(!open);
              }}
              className="m-6"
            />
          ) : (
            <PanelLeftOpen
              onClick={() => {
                setOpen(!open);
              }}
              className="m-6"
            />
          )}
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
