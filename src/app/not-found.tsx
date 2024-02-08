import { Wrapper } from '@/components/atoms'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <Wrapper className='flex flex-col gap-5 items-center'>
      <h2>Cette page est introuvable</h2>

      <Button variant='primary' asChild>
        <Link href='/'>Go Back</Link>
      </Button>
    </Wrapper>
  )
}
