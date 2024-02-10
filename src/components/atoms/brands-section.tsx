import Image from 'next/image'

export const BrandsSection = () => {
  return (
    <ul className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-16 place-items-center w-full'>
      {Array.from({ length: 6 }).map((_, index) => (
        <li key={`Brand ${index + 1} logo`}>
          <Image
            src={`/partners/Vector-${index + 1}.svg`}
            alt={`Brand ${index + 1} logo`}
            width={100}
            height={100}
          />
        </li>
      ))}
    </ul>
  )
}
