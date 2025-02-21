"use client";
import Link from "next/link";

const route = [
  { path: "/", pageTitle: "Home" },
  { path: "/dashboard", pageTitle: "Dashboard" },
];

const NavBar = () => {
  return (
    <nav className="padding flexbox-center">
      <div className="flex items-center gap-4">
        {route.map((item) => {
          return (
            <Link key={item.pageTitle} href={item.path}>
              {item.pageTitle}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default NavBar;
