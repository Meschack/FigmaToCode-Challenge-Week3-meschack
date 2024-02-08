'use client'

import { Logo, Wrapper } from '@/components/atoms'
import {
  MobileHeaderMenuActions,
  NavbarActions,
  NavMenu,
} from '@/components/molecules'
import { useState } from 'react'

export const Header = () => {
  const [open, setOpen] = useState(false)

  const toggleMenuAction = () => {
    setOpen(!open)
  }

  return (
    <Wrapper className='flex justify-between items-center flex-wrap bg-[#F6F6F6] lg:bg-transparent'>
      <Logo />
      <NavbarActions />
      <MobileHeaderMenuActions toggle={toggleMenuAction} />
      <NavMenu className={open ? 'flex' : 'hidden lg:!flex'} />
    </Wrapper>
  )
}
