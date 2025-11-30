"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    href: "/#skills",
    name: "Skills",
  },
  {
    href: "/#contacts",
    name: "Contacts",
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed w-full py-4 bg-zinc-950 border-b border-zinc-800">
      <div className="flex items-center justify-between px-8">
        <Link href="/" className="text-xl font-bold">
          Chatchakan Yu-on
        </Link>

        {/* Desktop Nav */}
        <nav className={cn("hidden md:flex gap-8")}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "hover:text-zinc-50",
                pathname === item.href ? "text-zinc-50" : "text-zinc-400"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
