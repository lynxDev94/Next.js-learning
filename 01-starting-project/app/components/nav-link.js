'use client';


import React from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';

function NavLink({href, children}) {
  const path = usePathname();
  return (
    <Link href={href} className={path.startsWith(href) ? `active` : undefined}>{children}</Link>
  )
}

export default NavLink