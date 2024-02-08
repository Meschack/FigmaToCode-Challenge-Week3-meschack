import { Icon, Wrapper } from '@/components/atoms'
import { Button } from '@/components/ui/button'
import { LucideIconName } from '@/lib/types'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ContactCardsSection, ContactHeroSection } from '@/components/organisms'

export const metadata: Metadata = {
  title: 'Bandage | Contact',
  description: 'Contact us',
}

export default function ContactPage() {
  return (
    <>
      <Wrapper className='flex flex-col gap-20'>
        <ContactHeroSection />

        <ContactCardsSection />

        <div className='flex flex-col gap-5 items-center'>
          <h3>WE Can't WAIT TO MEET YOU</h3>

          <p className='text-3xl font-bold '>Let's Talk</p>

          <Button variant='primary'>Try it free now</Button>
        </div>
      </Wrapper>
    </>
  )
}
