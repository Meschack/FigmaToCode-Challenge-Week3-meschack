import { Icon } from '@/components/atoms'
import { LucideIconName } from '@/lib/types'
import Link from 'next/link'

type Element = {
  icon: LucideIconName
  label?: string
  path: string
}

const elements: Element[] = [
  {
    icon: 'user',
    label: 'Login / Register',
    path: '/auth',
  },
  {
    icon: 'search',
    path: '#',
  },
  {
    icon: 'shopping-cart',
    path: '/cart',
  },
  {
    icon: 'heart',
    path: '/wishlist',
  },
]

export const NavbarActions = () => {
  return (
    <div className='flex gap-5 items-center justify-between text-blue-500'>
      {elements.map((element) => (
        <Link
          href={element.path}
          key={element.path}
          className='flex gap-2 items-center'
        >
          <Icon name={element.icon} />
          {element.label && <span>{element.label}</span>}
        </Link>
      ))}
    </div>
  )
}
