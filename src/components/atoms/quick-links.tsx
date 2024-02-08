import Link from 'next/link'

const quickLinks = [
  {
    title: 'Company Info',
    elements: [
      {
        path: '#',
        label: 'How it works',
      },
      {
        path: '#',
        label: 'Carrier',
      },
      {
        path: '#',
        label: 'We are hiring',
      },
      {
        path: '#',
        label: 'Blog',
      },
    ],
  },
  {
    title: 'Legal',
    elements: [
      {
        path: '#',
        label: 'How it works',
      },
      {
        path: '#',
        label: 'Carrier',
      },
      {
        path: '#',
        label: 'We are hiring',
      },
      {
        path: '#',
        label: 'Blog',
      },
    ],
  },
  {
    title: 'Features',
    elements: [
      {
        path: '#',
        label: 'Business Marketing',
      },
      {
        path: '#',
        label: 'User Analytics',
      },
      {
        path: '#',
        label: 'Live chat',
      },
      {
        path: '#',
        label: 'Unlimited Support',
      },
    ],
  },
  {
    title: 'Resources',
    elements: [
      {
        path: '#',
        label: 'IOS & Android',
      },
      {
        path: '#',
        label: 'Watch a Demo',
      },
      {
        path: '#',
        label: 'Customers',
      },
      {
        path: '#',
        label: 'API',
      },
    ],
  },
]
export const QuickLinks = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-20'>
      {quickLinks.map((quickLink) => (
        <div key={quickLink.title}>
          <h2 className='mb-10'>{quickLink.title}</h2>

          <div className='flex flex-col gap-5'>
            {quickLink.elements.map((element) => (
              <Link
                href={element.path}
                key={element.label}
                className='hover:underline hover:underline-offset-4 w-max text-gray-600'
              >
                {element.label}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
