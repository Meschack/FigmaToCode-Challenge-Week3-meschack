import { cn } from '@/lib/utils'
import Link from 'next/link'

const links = [
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/product',
    label: 'Product',
  },
  {
    path: '/pricing',
    label: 'Pricing',
  },
  {
    path: '/about',
    label: 'About',
  },
  {
    path: '/contact',
    label: 'Contact',
  },
]

interface Props extends React.ComponentPropsWithoutRef<'div'> {}

export const NavMenu = ({ className, ...rest }: Props) => {
  return (
    <div
      className={cn(
        'flex items-center justify-between order-3 lg:order-2 basis-full lg:basis-auto',
        className,
      )}
    >
      <ul className='flex gap-5 flex-col w-full lg:w-max lg:flex-row items-center mt-5 lg:mt-0'>
        {links.map((link) => (
          <li key={link.label} className='hover:text-blue-500 text-[#737373]'>
            <Link className='font-semibold' href={link.path}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
