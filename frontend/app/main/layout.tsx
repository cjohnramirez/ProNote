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
    <SidebarProvider
      open={open}
      onOpenChange={setOpen}
      className="text-muted-white font-sans"
    >
      <Sidebar className="border-none p-6 pr-0">
        <SidebarHeader className="gap-6">
          <Link
            href={"/main/notes"}
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
            <DropdownMenuTrigger className="bg-muted-violet border-bright-violet flex w-full items-center gap-4 rounded-2xl border-1 p-4">
              <section>
                <div className="bg-bright-muted-violet flex aspect-square w-10 items-center justify-center rounded-full">
                  <p>
                    {userName
                      .toUpperCase()
                      .match(/\b(\w)/g)
                      ?.slice(0, 2)}
                  </p>
                </div>
              </section>
              <section className="flex w-full items-center justify-between">
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
              <SidebarMenu className="flex h-full flex-col justify-between gap-2 pt-2">
                <section>
                  {mainItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton className="h-12">
                        <Link
                          href={item.url}
                          key={item.title}
                          className="h-full w-full"
                        >
                          <article className="group/options flex h-full items-center gap-6">
                            <item.icon
                              strokeWidth={1}
                              size={27}
                              className="stroke-muted-nocolor group-hover/options:stroke-muted-white w-10"
                            />
                            <p className="text-md text-muted-nocolor group-hover/options:text-muted-white w-full font-semibold">
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
                        <article className="group/settings flex items-center gap-6">
                          <Bolt
                            strokeWidth={1}
                            size={27}
                            className="stroke-muted-nocolor group-hover/settings:stroke-muted-white w-10"
                          />
                          <p className="text-md text-muted-nocolor group-hover/settings:text-muted-white w-full font-semibold">
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
          <button className="bg-muted-violet border-bright-violet flex w-full items-center gap-4 rounded-2xl border-1 p-8">
            <section className="flex w-full flex-col justify-center">
              <p className="font-semibold">
                Trial Period in {userDurationPlan} days
              </p>
              <Link
                href="/landing/pricing/"
                className="text-bright-muted-violet text-sm leading-none font-semibold underline"
              >
                See Available Plans
              </Link>
            </section>
          </button>
        </SidebarHeader>
      </Sidebar>
      <SidebarInset className="m-8">
        <main className="bg-dark-violet border-muted-nocolor h-full rounded-2xl border-1">
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
