"use client"

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  // Mock backend
  const router = useRouter();
  
  useEffect(() => {
    const loggedIn = true;
    
    if (loggedIn) {
      router.push("/main");
    } else {
      router.push("/landing");
    }
  }, [router]);

  return <></>
}
