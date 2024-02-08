import { CardElement } from '@/lib/types'
import { ContactCard } from '../molecules/contact-card'
import { Wrapper } from '../atoms'

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
  <Wrapper className='flex flex-col gap-5 items-center bg-[#FAFAFA] md:bg-transparent'>
    <h4 className='uppercase'>Visit our office</h4>

    <p className='font-bold text-3xl'>
      We help small businesses with big ideas
    </p>

    <div className='flex items-center justify-center flex-col md:flex-row gap-10 md:gap-0'>
      {cards.map((card) => ContactCard(card))}
    </div>
  </Wrapper>
)
