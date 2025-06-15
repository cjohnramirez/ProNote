"use client"

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useUserStore } from "@/store/useUserStore";

export default function Home() {
  const router = useRouter();
  const loggedIn = useUserStore((state) => state.isLoggedIn);

  useEffect(() => {
    if (loggedIn) {
      router.push("/main/notes");
    } else {
      router.push("/landing");
    }
  }, [router]);

  return <></>;
}
