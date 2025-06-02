"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Sidebar, SidebarHeader } from "@/components/ui/sidebar";
import { useUserStore } from "@/store/useUserStore";
import { ChevronsUpDown } from "lucide-react";
import Image from "next/image";
import React from "react";

function MainSideBar() {
  const userName = useUserStore((state) => state.userName);
  const userPlan = useUserStore((state) => state.userPlan);

  return (
    <Sidebar className="p-6 font-sans">
      <SidebarHeader className="gap-6">
        <header className="flex items-center gap-6 font-semibold">
          <Image src="/icon.png" alt="ProNote Icon" width={50} height={50} priority={true}/>
          <p className="text-xl">ProNote</p>
        </header>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex p-4 bg-muted-violet border-bright-violet border-1 w-full rounded-2xl items-center gap-4">
            <section>
              <div className="rounded-full bg-bright-muted-violet w-10 aspect-square flex items-center justify-center">
                <p>{userName.toUpperCase().match(/\b(\w)/g)?.slice(0, 2)}</p>
              </div>
            </section>
            <section className="flex w-full justify-between items-center">
              <div className="flex flex-col items-start">
                <p className="text-md font-semibold">{userName}</p>
                <p className="text-sm leading-none font-semibold text-gray-600">{userPlan}</p>
              </div>
              <ChevronsUpDown />
            </section>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarHeader>
    </Sidebar>
  );
}

export default MainSideBar;
