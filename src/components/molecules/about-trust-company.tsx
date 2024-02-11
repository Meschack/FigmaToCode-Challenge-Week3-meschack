import { BrandsSection, Wrapper } from '../atoms'

export const AboutTrustCompany = () => {
  return (
    <div className='bg-gray-50 text-center'>
      <Wrapper className='flex flex-col gap-10 items-center'>
        <h2 className='text-3xl capitalize'>Big companies are here</h2>

        <p className='text-gray-600'>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>

        <BrandsSection />
      </Wrapper>
    </div>
  )
}
