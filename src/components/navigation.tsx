"use client";
import Link from "next/link";
import { navigationLinks } from "@/config/navigation";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex items-center justify-center gap-4">
        {navigationLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={
                pathname === link.href ? "text-blue-500" : "text-gray-500"
              }
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
