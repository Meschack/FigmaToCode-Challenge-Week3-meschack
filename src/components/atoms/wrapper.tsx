import { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'

interface Props extends ComponentPropsWithoutRef<'div'> {}

export const Wrapper = ({ children, className, ...props }: Props) => {
  return (
    <div
      className={cn('py-5 px-5 md:px-20 lg:py-10 lg:px-40 xl:px-56', className)}
      {...props}
    >
      {children}
    </div>
  )
}
