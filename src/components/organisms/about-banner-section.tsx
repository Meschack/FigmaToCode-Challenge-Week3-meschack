import Image from 'next/image'

import heroImage from '@/assets/images/about-banner.png'

import { Button } from '../ui/button'

export const AboutBannerSection = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-5 items-center gap-10 lg:gap-0'>
      <div className='flex flex-col items-center lg:col-span-2 lg:items-start gap-8 flex-grow'>
        <h3 className='uppercase hidden lg:block'>About Company</h3>

        <h2 className='uppercase text-2xl'>About Us</h2>

        <p className='text-gray-600 text-center lg:text-start'>
          We know how large objects will act, but things on a small scale
        </p>

        <Button variant='primary' className='w-max'>
          Get Quote Now
        </Button>
      </div>

      <div className='relative lg:col-span-3'>
        <div className='w-[70%] left-[20%] rounded-colorful-circle'></div>

        <div className='w-[50px] left-[10%] rounded-colorful-circle'></div>

        <div className='w-[25px] right-[20%] top-[50%] rounded-colorful-circle'></div>

        <div className='w-[10px] right-[10%] top-[25%] rounded-colorful-circle !bg-[#977DF4]'></div>

        <div className='w-[10px] left-[10%] bottom-[25%] rounded-colorful-circle !bg-[#977DF4]'></div>

        <Image src={heroImage} alt='Hero Image' priority />
      </div>
    </div>
  )
}
