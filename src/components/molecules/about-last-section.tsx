import Image from 'next/image'
import { Button } from '../ui/button'

import lastImageOnAbout from '@/assets/images/last-on-about.png'

export const AboutLastSection = () => {
  return (
    <div className='flex items-stretch'>
      <div className='bg-blue-500 flex flex-col items-center lg:items-start gap-5 justify-center p-10 lg:p-20 text-white'>
        <h3 className='uppercase'>Work with us</h3>

        <h2>Now, Let's grow Yours</h2>

        <p className='text-center lg:text-start'>
          The gradual accumulation of information about atomic and small-scale
          behavior during the first quarter of the 20th
        </p>

        <Button
          className='bg-transparent text-white w-max hover:bg-white hover:text-blue-500'
          variant='transparent'
        >
          Button
        </Button>
      </div>

      <div className='hidden lg:block h-max'>
        <Image src={lastImageOnAbout} alt='Last image on about' priority />
      </div>
    </div>
  )
}
