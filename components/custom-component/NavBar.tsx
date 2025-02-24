"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const routes = [
  { path: "/", pageTitle: "Home" },
  { path: "/dashboard", pageTitle: "Dashboard" },
];

const NavBar = () => {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/");
    } catch (error) {
      console.error("Failed to log out");
    }
  };

  return (
    <nav className="padding flexbox-center justify-between">
      <Tabs defaultValue={pathname} value={pathname} className="w-[400px]">
        <TabsList className="grid bg-black w-full grid-cols-2 rounded-full h-11 p-2">
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

      <div className="flex items-center gap-4">
        {user ? (
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-700">{user.email}</span>
            <button
              onClick={handleLogout}
              className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Sign out
            </button>
          </div>
        ) : (
          <Link
            href="/auth/signin"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Sign in
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
