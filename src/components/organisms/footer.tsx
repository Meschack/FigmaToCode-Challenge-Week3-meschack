import {
  Logo,
  Newsletter,
  QuickLinks,
  SocialLinks,
  Wrapper,
} from '@/components/atoms'

export const Footer = () => {
  return (
    <div>
      <Wrapper className='bg-gray-50 flex justify-between items-center'>
        <Logo />
        <SocialLinks />
      </Wrapper>

      <Wrapper className='flex justify-between'>
        <QuickLinks />
        <Newsletter />
      </Wrapper>

      <Wrapper className='bg-gray-50'>
        <p>Made with love by Finland. All rights reserved</p>
      </Wrapper>
    </div>
  )
}
