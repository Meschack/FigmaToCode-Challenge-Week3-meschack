import Link from 'next/link'
import * as React from 'react'

const links = [
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/shop',
    label: 'Shop',
  },
  {
    path: '/about',
    label: 'About',
  },
  {
    path: '/blog',
    label: 'Blog',
  },

  {
    path: '/contact',
    label: 'Contact',
  },

  {
    path: '/pages',
    label: 'Pages',
  },
]

export const NavMenu = () => {
  return (
    <div className='flex items-center justify-between'>
      <ul className='flex gap-5'>
        {links.map((link) => (
          <li key={link.label} className='hover:text-blue-500'>
            <Link className='' href={link.path}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
