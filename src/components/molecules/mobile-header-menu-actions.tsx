import { LucideIconName } from '@/lib/types'
import { Icon } from '../atoms'
import Link from 'next/link'

type Element = {
  icon: LucideIconName
  path: string
}

const elements: Element[] = [
  {
    icon: 'search',
    path: '/search',
  },
  {
    icon: 'shopping-cart',
    path: '#',
  },
]

interface Props {
  toggle: () => void
}

export const MobileHeaderMenuActions = ({ toggle }: Props) => {
  return (
    <div className='lg:hidden order-2 lg:order-3 flex gap-2 items-center justify-end lg:text-blue-500 text-[#737373] basis-1/2'>
      {elements.map((element) => (
        <Link
          href={element.path}
          key={element.path}
          className='hover:text-blue-500 p-2'
        >
          <Icon name={element.icon} />
        </Link>
      ))}

      <div onClick={toggle} className='cursor-pointer hover:text-blue-500 p-2'>
        <Icon name='gantt-chart' />
      </div>
    </div>
  )
}
