"use client";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useUserStore } from "@/store/useUserStore";
import {
  Bolt,
  Book,
  ChevronsUpDown,
  NotebookText,
  RefreshCw,
  SquareCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Main({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(true);
  const mainItems = [
    {
      title: "Notes",
      url: "/main/notes",
      icon: NotebookText,
    },
    {
      title: "Tasks",
      url: "/main/tasks",
      icon: SquareCheck,
    },
    {
      title: "Habits",
      url: "/main/habits",
      icon: RefreshCw,
    },
    {
      title: "Diary",
      url: "/main/diary",
      icon: Book,
    },
  ];

  const userName = useUserStore((state) => state.userName);
  const userPlan = useUserStore((state) => state.userPlan);
  const userDurationPlan = useUserStore((state) => state.userDurationPlan);

  return (
    <SidebarProvider open={open} onOpenChange={setOpen}>
      <Sidebar className="p-6 pr-0 font-sans border-none">
        <SidebarHeader className="gap-6">
          <Link
            href={"/main"}
            className="flex items-center gap-6 font-semibold"
          >
            <Image
              src="/icon.png"
              alt="ProNote Icon"
              width={50}
              height={50}
              priority={true}
            />
            <p className="text-xl">ProNote</p>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex p-4 bg-muted-violet border-bright-violet border-1 w-full rounded-2xl items-center gap-4">
              <section>
                <div className="rounded-full bg-bright-muted-violet w-10 aspect-square flex items-center justify-center">
                  <p>
                    {userName
                      .toUpperCase()
                      .match(/\b(\w)/g)
                      ?.slice(0, 2)}
                  </p>
                </div>
              </section>
              <section className="flex w-full justify-between items-center">
                <div className="flex flex-col items-start">
                  <p className="text-md font-semibold">{userName}</p>
                  <p className="text-sm leading-none font-semibold text-gray-600">
                    {userPlan}
                  </p>
                </div>
                <ChevronsUpDown />
              </section>
            </DropdownMenuTrigger>
            <DropdownMenuContent></DropdownMenuContent>
          </DropdownMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup className="h-full">
            <SidebarContent>
              <SidebarMenu className="gap-2 pt-2 flex flex-col justify-between h-full">
                <section>
                  {mainItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton className="h-12">
                        <Link
                          href={item.url}
                          key={item.title}
                          className="w-full h-full"
                        >
                          <article className="flex items-center gap-6 group/options h-full">
                            <item.icon
                              strokeWidth={1}
                              size={27}
                              className="stroke-muted-nocolor w-10 group-hover/options:stroke-muted-white"
                            />
                            <p className="text-md text-muted-nocolor font-semibold w-full group-hover/options:text-muted-white">
                              {item.title}
                            </p>
                          </article>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </section>
                <section>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="h-12">
                      <Link href="/main/settings" className="w-full">
                        <article className="flex items-center gap-6 group/settings">
                          <Bolt
                            strokeWidth={1}
                            size={27}
                            className="stroke-muted-nocolor w-10 group-hover/settings:stroke-muted-white"
                          />
                          <p className="text-md text-muted-nocolor font-semibold w-full group-hover/settings:text-muted-white">
                            Settings
                          </p>
                        </article>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </section>
              </SidebarMenu>
            </SidebarContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarHeader>
          <button className="flex p-8 bg-muted-violet border-bright-violet border-1 w-full rounded-2xl items-center gap-4">
            <section className="flex flex-col justify-center w-full">
              <p className="font-semibold">
                Trial Period in {userDurationPlan} days
              </p>
              <Link
                href="/landing/pricing/"
                className="text-sm leading-none text-bright-muted-violet underline font-semibold"
              >
                See Available Plans
              </Link>
            </section>
          </button>
        </SidebarHeader>
      </Sidebar>
      <SidebarInset>
        <main className="m-8 h-full bg-dark-violet rounded-2xl border-1 border-muted-nocolor">
          {open == true ? (
            <PanelLeftClose
              onClick={() => {
                setOpen(!open);
              }}
              className="m-6 mb-0"
            />
          ) : (
            <PanelLeftOpen
              onClick={() => {
                setOpen(!open);
              }}
              className="m-6 mb-0"
            />
          )}
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
