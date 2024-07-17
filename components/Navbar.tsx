"use client";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { NAV_ITEMS } from "@/constants/navLinks";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="sticky inset-x-0 top-0 z-50 w-full transition-all border-b-[#0e2923] border-b bg-[#003b2f] p-4 shadow-md">
      <MaxWidthWrapper className="flex items-center justify-between">
        <Link href={"/"}>
          <h2 className="text-4xl font-semibold text-white">ML</h2>
        </Link>
        <div className="flex items-center gap-6">
          {NAV_ITEMS.map((item, index) => (
            <Link
              key={item.title}
              href={item.path}
              className={`text-lg pb-1 ${
                item.path === pathname
                  ? "font-bold text-zinc-400 border-b border-zinc-400"
                  : "text-white"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
