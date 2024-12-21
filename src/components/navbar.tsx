import { Link, useLocation } from "react-router-dom";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import { useTheme } from "@/hooks/useTheme";

export const Navbar = () => {
  const customNavMenuItems: { label: string; href: string }[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
    { label: "Project", href: "/project" },
  ];

  const location = useLocation();
  const { isDark } = useTheme();

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            to="/"
          >
            <p className="font-bold text-inherit">Rugi Empower</p>
          </Link>
        </NavbarBrand>
        <div className="hidden md:flex gap-4 justify-center flex-grow">
          {customNavMenuItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  location.pathname === item.href
                    ? isDark
                      ? "bg-white text-black"
                      : "bg-black text-white"
                    : "text-white",
                  "rounded-full px-2 py-1 transition-colors duration-300"
                )}
                to={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </div>
        <div className="hidden md:flex justify-end ml-auto">
          <ThemeSwitch />
        </div>
      </NavbarContent>

      <NavbarContent className="md:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {customNavMenuItems.map((item) => (
            <NavbarMenuItem key={item.href}>
              <Link
                className={clsx(
                  location.pathname === item.href
                    ? isDark
                      ? "bg-white text-black"
                      : "bg-black text-white"
                    : "text-white",
                  "rounded-full px-2 py-1 transition-colors duration-300"
                )}
                to={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
