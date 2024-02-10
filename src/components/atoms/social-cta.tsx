import { LucideIconName } from '@/lib/types'
import { Icon } from '@/components/atoms/icon'
import Link from 'next/link'

interface Link {
  icon: LucideIconName
  path: string
}

const links: Link[] = [
  {
    icon: 'twitter',
    path: 'https://x.com',
  },
  {
    icon: 'facebook',
    path: 'https://facebbok.com',
  },
  {
    icon: 'instagram',
    path: 'https://instagram.com',
  },
  {
    icon: 'linkedin',
    path: 'https://linkedin.com',
  },
]

export const SocialCta = () => {
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
