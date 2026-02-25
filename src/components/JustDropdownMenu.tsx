import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import { ExpandMore } from "@mui/icons-material";
import Link from "next/link";
import { ReactNode } from "react";

type JustDropdownMenuProps = {
  label: string;
  links: {
    href: string;
    children: ReactNode;
  }[];
};

export default function JustDropdownMenu(props: JustDropdownMenuProps) {
  const { label, links } = props;

  return (
    <div className="fixed top-24 w-52 text-right">
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-700 data-open:bg-gray-700">
          {label}
          <ExpandMore className="size-4 fill-white/60" />
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
        >
          {links.map((link) => (
            <MenuItem key={link.href}>
              <Link
                href={link.href}
                className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10"
              >
                {link.children}
              </Link>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </div>
  );
}
