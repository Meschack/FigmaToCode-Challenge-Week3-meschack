import { LucideIconName } from '@/lib/types'
import { Icon } from '@/components/atoms/icon'
import Link from 'next/link'

interface Link {
  icon: LucideIconName
  path: string
}

const links: Link[] = [
  {
    icon: 'facebook',
    path: 'https://facebbok.com',
  },
  {
    icon: 'instagram',
    path: 'https://instagram.com',
  },
  {
    icon: 'twitter',
    path: 'https://x.com',
  },
]

export const SocialLinks = () => {
  return (
    <div className='flex gap-5 text-blue-500'>
      {links.map((link) => (
        <Link key={link.path} href={link.path}>
          <Icon name={link.icon} />
        </Link>
      ))}
    </div>
  )
}
