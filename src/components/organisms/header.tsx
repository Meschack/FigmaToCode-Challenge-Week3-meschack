import { Logo, Wrapper } from '@/components/atoms'
import { NavbarActions, NavMenu } from '@/components/molecules'

export const Header = () => {
  return (
    <Wrapper className='flex justify-between items-center'>
      <Logo />
      <NavMenu />
      <NavbarActions />
    </Wrapper>
  )
}
