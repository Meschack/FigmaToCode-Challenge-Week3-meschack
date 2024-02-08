import { Wrapper } from '@/components/atoms'
import { Button } from '@/components/ui/button'
import { Metadata } from 'next'
import { ContactCardsSection, ContactHeroSection } from '@/components/organisms'
import Image from 'next/image'

import arrowDown from '@/assets/images/arrow-down.svg'

export const metadata: Metadata = {
  title: 'Bandage | Contact',
  description: 'Contact us',
}

export default function ContactPage() {
  return (
    <div className='flex flex-col gap-20'>
      <Wrapper>
        <ContactHeroSection />
      </Wrapper>

      <ContactCardsSection />

      <Wrapper className='flex flex-col gap-5 items-center'>
        <Image src={arrowDown} alt='Arrow down' />
        <h3>WE Can't WAIT TO MEET YOU</h3>

        <p className='text-3xl font-bold '>Let's Talk</p>

        <Button variant='primary'>Try it free now</Button>
      </Wrapper>
    </div>
  )
}
