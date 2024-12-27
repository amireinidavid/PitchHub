"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { AlignJustify, Moon } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import Image from "next/image";

function Header({ user, profileInfo }) {
  const { theme, setTheme } = useTheme();
  const menuItems = [
    { label: "Home", path: "/", show: true },
    { label: "Login", path: "/sign-in", show: !user },
    { label: "Register", path: "/sign-up", show: !user },
    {
      label: "Activity",
      path: "/activity",
      show: profileInfo?.role === "investor",
    },
    { label: "Pitching", path: "/pitching", show: profileInfo },
    { label: "Membership", path: "/membership", show: profileInfo },
    { label: "Accounts", path: "/account", show: profileInfo },
  ];

  return (
    <div>
      <header className="flex h-16 w-full items-center justify-between px-4">
        <Image
          src={"/assets/logo.png"}
          alt="logo"
          width={72}
          height={72}
          className="rounded-full mr-2"
        />
        <Link className="lg:hidden font-bold text-3xl" href={"/"}>
          Pitch Hub
        </Link>
        <div className="flex items-center gap-4 lg:hidden">
          <UserButton afterSignOutUrl="/" className="lg:hidden" />
          <Sheet>
            <SheetTrigger asChild>
              <Button className="lg:hidden">
                <AlignJustify className="h-6 w-6" />
                <span className="sr-only">Toggle Navigation Menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="right">
              <Link className="mr-6" href={"#"}>
                <h3>Pitch Hub</h3>
              </Link>
              <div className="grid gap-2 py-6">
                {menuItems.map((menuItem) =>
                  menuItem.show ? (
                    <Link
                      key={menuItem.path}
                      href={menuItem.path}
                      onClick={() => sessionStorage.removeItem("filterParams")}
                      className="flex w-full items-center py-2 text-lg font-semibold"
                    >
                      {menuItem.label}
                    </Link>
                  ) : null
                )}
                {/* <Moon
                className="cursor-pointer mb-4"
                fill={theme === "dark" ? "light" : "dark"}
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              /> */}
                <UserButton afterSignOutUrl="/" />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <Link className="hidden font-bold text-3xl lg:flex" href={"/"}>
          Pitch Hub
        </Link>

        <nav className="ml-auto hidden lg:flex gap-6 items-center">
          {menuItems.map((menuItem) =>
            menuItem.show ? (
              <Link
                key={menuItem.path}
                href={menuItem.path}
                onClick={() => sessionStorage.removeItem("filterParams")}
                className="group inline-flex h-9 w-max items-center rounded-md px-4 py-2 text-sm font-medium"
              >
                {menuItem.label}
              </Link>
            ) : null
          )}
          <UserButton afterSignOutUrl="/" />
        </nav>
      </header>
    </div>
  );
}

export default Header;
