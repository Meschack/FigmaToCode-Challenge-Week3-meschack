import { Play } from 'lucide-react'
import Image from 'next/image'

import videoMiniature from '@/assets/images/video.jpeg'

export const AboutVideoSection = () => {
  return (
    <div className='relative'>
      <Image
        src={videoMiniature}
        alt='Video banner'
        className='rounded-md'
        priority
      />

      <div className='p-5 rounded-[100%] text-white absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-blue-500 flex items-center justify-center'>
        <Play fill='white' color='white' />
      </div>
    </div>
  )
}
