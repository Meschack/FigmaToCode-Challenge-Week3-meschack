import { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'

interface Props extends ComponentPropsWithoutRef<'div'> {}

export const Wrapper = ({ children, className, ...props }: Props) => {
  return (
    <div
      className={cn('py-5 px-10 md:px-20 lg:py-10 lg:px-40', className)}
      {...props}
    >
      {children}
    </div>
  )
}
