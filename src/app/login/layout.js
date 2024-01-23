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

// import React from 'react'
// import { usePathname } from 'next/navigation'
// import Link from 'next/link'
// const validpath = [
//   '/login/loginstudent',
//   '/login/all'
// ]
// const layout = ({ children }) => {
//   const path = usePathname()
//   const asssing = validpath.includes(path)


//   return (
//     <div>
//       {asssing ? (
//         <div>

//           <Link href='/login'>Go main </Link>
//         </div>
//       ) : (


//         <div>
//           <Link href='/login'>Main Login</Link>
//           <Link href='/login/loginstudent'>student</Link>
//           <Link href='/login/loginteachers'>teacher</Link>
//           <Link href='/login/all'>all</Link>
//         </div>
//       )}
//       common
//       {children}
//     </div>
//   )
// }

// export default layout