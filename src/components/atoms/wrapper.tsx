import { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'

interface Props extends ComponentPropsWithoutRef<'div'> {}

export const Wrapper = ({ children, className, ...props }: Props) => {
  return (
    <div className={cn('py-10 px-20', className)} {...props}>
      {children}
    </div>
  )
}
