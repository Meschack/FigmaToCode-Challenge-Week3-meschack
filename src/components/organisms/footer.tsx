import {
  Logo,
  Newsletter,
  QuickLinks,
  SocialLinks,
  Wrapper,
} from '@/components/atoms'

export const Footer = () => {
  return (
    <div className='bg-white'>
      <Wrapper className='flex flex-col gap-16'>
        <div className='flex flex-col gap-8 lg:flex-row lg:justify-between lg:items-center'>
          <Logo className='text-black' />
          <SocialLinks />
        </div>

        <hr className='hidden md:block' />

        <div className='flex justify-between flex-col flex-wrap xl:flex-row gap-10 xl:gap-20'>
          <QuickLinks />
          <Newsletter />
        </div>
      </Wrapper>

      <Wrapper className='bg-gray-50'>
        <p>Made with love by Finland. All rights reserved</p>
      </Wrapper>
    </div>
  )
}
