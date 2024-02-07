import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export const NavbarActions = () => {
  return (
    <div className='hidden lg:flex lg:order-3 gap-5 items-center justify-between text-blue-500'>
      <Link href='/login'>Login</Link>

      <Button variant='primary' className='flex items-center gap-3'>
        <span>Become a member</span>
        <ArrowRight className='mr-2 h-4 w-4' />
      </Button>
    </div>
  )
}
