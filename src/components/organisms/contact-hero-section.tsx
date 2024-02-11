import { LucideIconName } from '@/lib/types'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '../atoms'
import contactHeroImage from '@/assets/images/technology.png'

interface Social {
  icon: LucideIconName
  path: string
}

const socials: Social[] = [
  { icon: 'twitter', path: 'https://x.com' },
  { icon: 'facebook', path: 'https://facebook.com' },
  { icon: 'instagram', path: 'https://instagram.com' },
  { icon: 'linkedin', path: 'https://linkedin.com' },
]

export const ContactHeroSection = () => {
  return (
    <div className='grid grid-colsContactHeroSection-1 lg:grid-cols-2 items-center gap-10 lg:gap-0'>
      <div className='flex flex-col items-center lg:items-start gap-8 text-center lg:text-start'>
        <h3 className='uppercase hidden lg:block'>Contact us</h3>

        <h2 className='text-3xl'>Get in touch today!</h2>

        <p className='text-gray-600 lg:text-start'>
          We know how large objects will act, but things on a small scale
        </p>

        <div className='flex flex-col gap-3'>
          <strong>Phone : +451 215 215 </strong>
          <strong>Fax : +451 215 215 </strong>
        </div>

        <div className='flex gap-3 items-center'>
          {socials.map((social) => (
            <Link
              href={social.path}
              target='_blank'
              className='p-2'
              key={social.path}
            >
              <Icon name={social.icon} />
            </Link>
          ))}
        </div>
      </div>

      <div className='relative'>
        <div className='w-[55%] left-[20%] rounded-colorful-circle'></div>

        <div className='w-[50px] left-[10%] rounded-colorful-circle'></div>

        <div className='w-[25px] right-[20%] top-[50%] rounded-colorful-circle'></div>

        <div className='w-[10px] right-[10%] top-[25%] rounded-colorful-circle !bg-[#977DF4]'></div>

        <div className='w-[10px] left-[10%] bottom-[25%] rounded-colorful-circle !bg-[#977DF4]'></div>

        <Image src={contactHeroImage} alt='Hero Image' priority />
      </div>
    </div>
  )
}
