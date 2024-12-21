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

export const Navbar = () => {
  const customNavMenuItems: { label: string; href: string }[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
    { label: "Project", href: "/project" },
  ];

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
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                href={item.href}
                onClick={(event) => {
                  document.querySelectorAll("a").forEach((link) => {
                    link.classList.remove("active");
                  });
                  event.currentTarget.classList.add("active");
                }}
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
                href={item.href}
                size="lg"
                onClick={(event) => {
                  document.querySelectorAll("a").forEach((link) => {
                    link.classList.remove("active");
                  });
                  event.currentTarget.classList.add("active");
                }}
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
