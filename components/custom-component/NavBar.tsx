"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  { path: "/", pageTitle: "Home" },
  { path: "/dashboard", pageTitle: "Dashboard" },
];

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className="padding flexbox-center">
      <Tabs
        defaultValue={pathname}
        value={pathname}
        className="w-[400px] bg-secondary-color rounded-full p-2"
      >
        <TabsList className="grid w-full grid-cols-2">
          {routes.map((item) => (
            <TabsTrigger
              key={item.pageTitle}
              value={item.path}
              className="shadow-none rounded-full"
            >
              <Link className="w-full" href={item.path}>
                {item.pageTitle}
              </Link>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </nav>
  );
};

export default NavBar;
