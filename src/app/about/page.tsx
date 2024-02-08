import { AboutBannerSection } from '@/components/organisms'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bandage | Contact',
  description: 'Contact us',
}

const About = () => {
  return (
    <div>
      <AboutBannerSection />
    </div>
  )
}

export default About
