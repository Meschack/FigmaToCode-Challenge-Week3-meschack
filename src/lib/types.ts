import dynamicIconImports from 'lucide-react/dynamicIconImports'

export type LucideIconName = keyof typeof dynamicIconImports

export interface CardElement {
  icon: LucideIconName
  main_contact: string
  second_contact: string
  main_element?: boolean
}
