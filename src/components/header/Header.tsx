import { cn } from '@/lib/utils'
import React from 'react'
import { MENU_ITEMS } from './menuItems'
import Link from 'next/link'
import DarkModeToggle from '@/layout/ToggleDarkMode'
const Header = () => {
  return (
    <section className={cn("flex items-center justify-between")}>
       <div className='flex items-center'>
           <span>LOGO</span>
           <div className='flex items-center gap-2'>
               {MENU_ITEMS.map((item, i) => (
                 <Link href={item.path ? item.path : ''} key={i}>
                    {item.title}
                 </Link>
               ))}
           </div>
           <DarkModeToggle />
       </div>
    </section>
  )
}

export default Header