'use client'
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const validPaths = [
  "/login",
  "/login/loginstudent",

];

const Layout = ({ children }) => {
  const pathname = usePathname();
  console.log(pathname);

  const isMainLayout = validPaths.includes(pathname);

  return (
    <div>
      {isMainLayout ? (
        <div>
          <Link href='/login'>Main Login</Link>
          <Link href='/login/loginstudent'>Student Login</Link>
          <Link href='/login/loginteachers'>Teacher Login</Link>
          <Link href='/login/all'>all</Link>
        </div>
      ) : (
        <Link href='/login'>Go to main</Link>
      )}
      <br />
      <br />
      {children}
    </div>
  );
};

export default Layout;
