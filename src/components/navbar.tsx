import { Link } from "@nextui-org/link";
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
import { useState, useEffect } from "react";

export const Navbar = () => {
  const customNavMenuItems: { label: string; href: string }[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
    { label: "Project", href: "/project" },
  ];

  const [activeLink, setActiveLink] = useState("");
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setIsDarkTheme(true);
    }
  }, []);

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
  };

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
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
                  activeLink === item.href ? (isDarkTheme ? "bg-white text-black" : "bg-black text-white") : "text-white",
                  "rounded-full px-2 py-1 transition-colors duration-300"
                )}
                href={item.href}
                onClick={() => handleLinkClick(item.href)}
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
                  activeLink === item.href ? (isDarkTheme ? "bg-white text-black" : "bg-black text-white") : "text-white",
                  "rounded-full px-2 py-1 transition-colors duration-300"
                )}
                href={item.href}
                size="lg"
                onClick={() => handleLinkClick(item.href)}
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
