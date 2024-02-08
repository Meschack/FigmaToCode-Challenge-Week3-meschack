import { CardElement } from '@/lib/types'
import { Icon } from '../atoms'
import { Button } from '../ui/button'

export function ContactCard(card: CardElement) {
  return (
    <div
      className={`flex flex-col gap-5 items-center ${card.main_element && 'bg-dark-background py-14 text-white'} p-5`}
      key={card.icon}
    >
      <Icon name={card.icon} size={64} color='#23A6F0' className='' />

      <div className='flex flex-col gap-2 text-center'>
        <strong>{card.main_contact}</strong>
        <strong>{card.second_contact}</strong>
      </div>

      <span>Get Support</span>

      <Button
        className={`border border-blue-600 text-blue-600 p-4 rounded-full hover:bg-blue-600 hover:text-white`}
        variant='transparent'
      >
        Submit Request
      </Button>
    </div>
  )
}
