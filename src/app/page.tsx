"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Transition from "@/components/transitions/transition";

export default function Introduction() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/home");
    }, 7000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <Transition>
      <div className="flex items-center justify-center h-screen bg-black text-white">
        <h1>Welcome to My Website</h1>
      </div>
    </Transition>
  );
}
