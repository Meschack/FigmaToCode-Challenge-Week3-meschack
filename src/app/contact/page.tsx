import { Icon, Wrapper } from '@/components/atoms'
import { Button } from '@/components/ui/button'
import { LucideIconName } from '@/lib/types'
import { Metadata } from 'next'
import contactHeroImage from '@/assets/images/technology.png'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Bandage | Contact',
  description: 'Contact us',
}

interface CardElement {
  icon: LucideIconName
  main_contact: string
  second_contact: string
  main_element?: boolean
}

interface Social {
  icon: LucideIconName
  path: string
}

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

const socials: Social[] = [
  { icon: 'twitter', path: 'https://x.com' },
  { icon: 'facebook', path: 'https://facebook.com' },
  { icon: 'instagram', path: 'https://instagram.com' },
  { icon: 'linkedin', path: 'https://linkedin.com' },
]

export default function ContactPage() {
  return (
    <>
      <Wrapper className='flex flex-col gap-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-0'>
          <div className='flex flex-col items-center lg:items-start gap-8'>
            <h3 className='uppercase hidden lg:block'>Contact us</h3>

            <h2 className='uppercase text-2xl'>Get in touch today!</h2>

            <p className='text-gray-600 text-center lg:text-start'>
              We know how large objects will act, but things on a small scale
            </p>

            <div className='flex gap-3 items-center'>
              {socials.map((social) => (
                <Link href={social.path} target='_blank' className='p-2'>
                  <Icon name={social.icon} />
                </Link>
              ))}
            </div>
          </div>

          <div className='relative'>
            <div className='hidden xl:block w-[300px] h-[300px] lg:w-[300px] lg:h-[300px] -z-10 left-[50%] -translate-x-[50%] absolute mx-auto rounded-full bg-[#FFE9EA]'></div>
            <Image src={contactHeroImage} alt='Hero Image' />
          </div>
        </div>

        <div className='flex flex-col gap-5 items-center'>
          <h4 className='uppercase'>Visit our office</h4>

          <p>We help small businesses with big ideas</p>

          <div className='flex items-center justify-center'>
            {cards.map((card) => (
              <div
                className={`flex flex-col gap-5 items-center ${card.main_element && 'bg-dark-background py-14 text-white'} p-5`}
              >
                <Icon name={card.icon} size={64} color='blue' />

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
            ))}
          </div>
        </div>

        <div className='flex flex-col gap-5 items-center'>
          <h3>WE Can't WAIT TO MEET YOU</h3>

          <p className='text-3xl font-bold '>Let's Talk</p>

          <Button variant='primary'>Try it free now</Button>
        </div>
      </Wrapper>
    </>
  )
}
