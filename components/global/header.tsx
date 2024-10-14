"use client";

import { cn } from "@/lib/utils";
import { MapPinPlusIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const currentPage = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-20 flex items-center justify-around w-full">
      <Link
        href="/"
        className={cn("relative", currentPage === "/" ? "text-blue-500" : "")}
      >
        <MapPinPlusIcon />
        {currentPage === "/" && (
          <div className="absolute -bottom-2 right-1/2 bg-blue-500 rounded-full size-2 flex items-center justify-center translate-x-1/2 translate-y-1/2"></div>
        )}
      </Link>
      <Link
        href="/maps"
        className={cn(
          "relative",
          currentPage === "/maps" ? "text-blue-500" : ""
        )}
      >
        Maps
        {currentPage === "/maps" && (
          <div className="absolute -bottom-2 right-1/2 bg-blue-500 rounded-full size-2 flex items-center justify-center translate-x-1/2 translate-y-1/2"></div>
        )}
      </Link>
      <Link
        href="/contact"
        className={cn(
          "relative",
          currentPage === "/contact" ? "text-blue-500" : ""
        )}
      >
        Contact
        {currentPage === "/contact" && (
          <div className="absolute -bottom-2 right-1/2 bg-blue-500 rounded-full size-2 flex items-center justify-center translate-x-1/2 translate-y-1/2"></div>
        )}
      </Link>
    </nav>
  );
};
