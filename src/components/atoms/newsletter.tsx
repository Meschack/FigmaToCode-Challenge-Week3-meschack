import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export const Newsletter = () => {
  return (
    <div className='basis-full xl:basis-auto'>
      <h2>Get in touch</h2>
      <form action='' className='flex gap-0 items-stretch mt-10'>
        <Input
          type='text'
          placeholder='Your Email'
          className='focus-visible:ring-0 rounded-s rounded-e-none block'
        />

        <Button
          variant='primary'
          className='rounded-s-none rounded-e'
          type='submit'
        >
          Subscribe
        </Button>
      </form>
      <p className='text-gray-600 mt-3'>Subscribe to our newsletter</p>
    </div>
  )
}
