import { CardElement } from '@/lib/types'
import { ContactCard } from '../molecules/contact-card'

const cards: CardElement[] = [
  {
    icon: 'phone',
    main_contact: 'georgia.young@example.com',
    second_contact: 'georgia.young@ple.com',
  },
  {
    icon: 'map-pin',
    main_contact: 'georgia.young@example.com',
    second_contact: 'georgia.young@ple.com',
    main_element: true,
  },
  {
    icon: 'mail',
    main_contact: 'georgia.young@example.com',
    second_contact: 'georgia.young@ple.com',
  },
]

export const ContactCardsSection = () => (
  <div className='flex flex-col gap-5 items-center'>
    <h4 className='uppercase'>Visit our office</h4>

    <p>We help small businesses with big ideas</p>

    <div className='flex items-center justify-center'>
      {cards.map((card) => ContactCard(card))}
    </div>
  </div>
)
