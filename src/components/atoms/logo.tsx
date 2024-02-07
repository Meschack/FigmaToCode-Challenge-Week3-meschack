import Link from 'next/link'
import { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'

interface MyProps extends ComponentPropsWithoutRef<'a'> {}

export const Logo = ({ href = '/', className, ...rest }: MyProps) => {
  return (
    <Link
      href={href}
      {...rest}
      className={cn('basis-1/2 lg:basis-auto', className)}
    >
      <h1>Bandage</h1>
    </Link>
  )
}
