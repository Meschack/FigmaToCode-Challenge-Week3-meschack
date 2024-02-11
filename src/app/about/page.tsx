import { AboutVideoSection, Wrapper } from '@/components/atoms'
import {
  AboutLastSection,
  AboutStats,
  AboutTrustCompany,
} from '@/components/molecules'
import { AboutBannerSection, AboutTeamSection } from '@/components/organisms'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bandage | About',
  description: 'Learn more about Bangade company',
}

const About = () => {
  return (
    <>
      <Wrapper className='flex flex-col gap-10'>
        <AboutBannerSection />

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

        <AboutStats />

        <AboutVideoSection />

        <AboutTeamSection />
      </Wrapper>

      <AboutTrustCompany />

      <AboutLastSection />
    </>
  )
}

export default About
