import Image from 'next/image'

import heroImage from '@/assets/images/about-banner.png'
import videoMiniature from '@/assets/images/video.jpeg'
import firstMember from '@/assets/images/team-1-user-1.png'
import secondMember from '@/assets/images/team-1-user-2.png'
import thirdMember from '@/assets/images/team-1-user-3.png'
import lastImageOnAbout from '@/assets/images/last-on-about.png'

import { Button } from '../ui/button'
import { BrandsSection, SocialLinks, Wrapper } from '../atoms'
import { Play } from 'lucide-react'

const stats = [
  {
    title: 'Happy customers',
    stat: '15K',
  },
  {
    title: 'Monthly visitors',
    stat: '150K',
  },
  {
    title: 'Countries worldwide',
    stat: '15',
  },
  {
    title: 'Top partners',
    stat: '100+',
  },
]

const team = [
  {
    name: 'Jane Doe',
    profession: 'Profession',
    photo: firstMember,
  },
  {
    name: 'Alicia Mberry',
    profession: 'Profession',
    photo: secondMember,
  },
  {
    name: 'John Doe',
    profession: 'Profession',
    photo: thirdMember,
  },
]

export const AboutBannerSection = () => {
  return (
    <>
      <Wrapper className='flex flex-col gap-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-0'>
          <div className='flex flex-col items-center lg:items-start gap-8'>
            <h3 className='uppercase hidden lg:block'>About Company</h3>

            <h2 className='uppercase text-2xl'>About Us</h2>

            <p className='text-gray-600 text-center lg:text-start'>
              We know how large objects will act, but things on a small scale
            </p>

            <Button variant='primary' className='w-max'>
              Get Quote Now
            </Button>
          </div>

          <div className='relative'>
            <div className='hidden xl:block w-[300px] h-[300px] lg:w-[300px] lg:h-[300px] -z-10 left-[50%] -translate-x-[50%] absolute mx-auto rounded-full bg-[#FFE9EA]'></div>
            <Image src={heroImage} alt='Hero Image' priority />
          </div>
        </div>

        <div className='flex flex-col items-center lg:block'>
          <h3 className='text-red-500 text-xs'>Problem trying</h3>

          <div className='grid lg:grid-cols-3 justify-between gap-10 mt-5 items-baseline text-lg'>
            <strong className='text-center lg:text-start lg:col-span-1'>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent.
            </strong>
            <small className='mt-5 lg:mt-0 lg:col-span-2 text-gray-600'>
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </small>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between items-center py-10 gap-5'>
          {stats.map((stat) => (
            <div
              className='flex flex-col items-center justify-center gap-3'
              key={stat.title}
            >
              <strong className='text-2xl'>{stat.stat}</strong>
              <span className='text-gray-600'>{stat.title}</span>
            </div>
          ))}
        </div>

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

        <div className='flex flex-col gap-5 items-center'>
          <h2>Meet our team</h2>

          <p className='text-gray-600 text-center'>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>

          <div className='grid justify-between gap-10 grid-cols-1 lg:grid-cols-3 w-full'>
            {team.map((member) => (
              <div className='flex flex-col gap-3' key={member.name}>
                <Image
                  src={member.photo}
                  alt={`${member.name}'s photo`}
                  className='w-full'
                  priority
                />

                <div className='flex flex-col gap-3 items-center px-3'>
                  <h3>{member.name}</h3>

                  <span>{member.profession}</span>

                  <SocialLinks />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>

      <div className='bg-gray-50 text-center'>
        <Wrapper className='flex flex-col gap-10 items-center'>
          <h2 className='text-3xl capitalize'>Big companies are here</h2>

          <p className='text-gray-600'>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>

          <BrandsSection />
        </Wrapper>
      </div>

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
    </>
  )
}
