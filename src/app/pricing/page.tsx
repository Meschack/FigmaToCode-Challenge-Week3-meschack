import { Wrapper } from '@/components/atoms'
import { SocialCta } from '@/components/atoms/social-cta'
import { AboutTrustCompany } from '@/components/molecules'
import React from 'react'
import { FaChevronRight, FaCircleCheck } from 'react-icons/fa6'

const pricing = () => {
  return (
    <>
      <div className='topbar text-center py-12'>
        <p className='mb-4'>PRICING</p>
        <h1 className='text-6xl mb-4'>Simple Pricing</h1>
        <ul className=''>
          <li className='inline'>
            <a href='#'>Home</a>
          </li>
          <li className='inline-block ml-2'>
            <a href='#'>Pricing</a>
          </li>
        </ul>
      </div>
      <Wrapper className='bg-[#FAFAFA] flex flex-col items-center '>
        <h2 className='text-3xl font-bold mb-3'>Pricing</h2>
        <p className='text-center w-[40rem] max-w-full text-lg text-secondary mb-12'>
          Problems trying to resolve the conflict between <br /> the two major
          realms of Classical physics: Newtonian mechanics
        </p>
        <div className='flex items-center gap-3 mb-12'>
          <p>Monthly</p>
          <label className='relative inline-flex items-center cursor-pointer'>
            <input type='checkbox' value='' className='sr-only peer' />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
          <p>Yearly</p>
          <a
            href='#'
            className='bg-[#B2E3FF] px-5 py-3 rounded-full font-bold text-primary'
          >
            Save 25%
          </a>
        </div>
        <div className='flex items-end gap-1 flex-col md:flex-row mb-28'>
          <div className='bg-white rounded-lg py-14 px-10 border border-primary'>
            <h3 className='text-center font-bold text-2xl mb-9'>FREE</h3>
            <p className='  text-lg text-secondary font-medium  text-center mb-9'>
              Organize across all <br /> apps by hand
            </p>
            <div className='flex justify-center items-center text-primary mb-9'>
              <strong className='text-5xl'>0</strong>
              <div className='pt-2'>
                <p>$</p>
                <p>Per Month</p>
              </div>
            </div>
            <ul>
              <li className='flex items-center gap-2 mb-4'>
                <FaCircleCheck className='text-3xl text-success' /> Unlimited
                product updates
              </li>
              <li className='flex items-center gap-2 mb-4'>
                <FaCircleCheck className='text-3xl text-success' /> Unlimited
                product updates
              </li>
              <li className='flex items-center gap-2 mb-4'>
                <FaCircleCheck className='text-3xl text-success' /> Unlimited
                product updates
              </li>
              <li className='flex items-center gap-2 mb-4'>
                <FaCircleCheck className='text-3xl text-muted' /> 1GB Cloud
                storage
              </li>
              <li className='flex items-center gap-2 mb-4'>
                <FaCircleCheck className='text-3xl text-muted' /> Email and
                community support
              </li>
            </ul>
            <a
              className='bg-[#252B42] text-white py-2 block text-center rounded-lg'
              href='#'
            >
              Try for free
            </a>
          </div>
          <div className='bg-[#252B42] text-white rounded-lg py-20 px-10'>
            <h3 className='text-center font-bold text-2xl mb-9'>STANDARD</h3>
            <p className='  text-l font-medium  text-center mb-9'>
              Organize across all <br /> apps by hand
            </p>
            <div className='flex gap-3 justify-center items-center text-primary mb-9'>
              <strong className='text-5xl'>9.99</strong>
              <div className='pt-2'>
                <p>$</p>
                <p>Per Month</p>
              </div>
            </div>
            <ul>
              <li className='flex items-center gap-2 mb-4'>
                <FaCircleCheck className='text-3xl text-success bg-white rounded-full' />{' '}
                Unlimited product updates
              </li>
              <li className='flex items-center gap-2 mb-4'>
                <FaCircleCheck className='text-3xl text-success bg-white rounded-full' />{' '}
                Unlimited product updates
              </li>
              <li className='flex items-center gap-2 mb-4'>
                <FaCircleCheck className='text-3xl text-success bg-white rounded-full' />{' '}
                Unlimited product updates
              </li>
              <li className='flex items-center gap-2 mb-4'>
                <FaCircleCheck className='text-3xl text-muted bg-white rounded-full' />{' '}
                1GB Cloud storage
              </li>
              <li className='flex items-center gap-2 mb-4'>
                <FaCircleCheck className='text-3xl text-muted bg-white rounded-full' />{' '}
                Email and community support
              </li>
            </ul>
            <a
              className='bg-primary text-white py-2 block text-center rounded-lg'
              href='#'
            >
              Try for free
            </a>
          </div>
          <div className='bg-white rounded-lg py-14 px-10 border border-primary'>
            <h3 className='text-center font-bold text-2xl mb-9'>PREMIUM</h3>
            <p className='  text-lg text-secondary font-medium  text-center mb-9'>
              Organize across all <br /> apps by hand
            </p>
            <div className='flex justify-center items-center text-primary mb-9'>
              <strong className='text-5xl'>19.99</strong>
              <div className='pt-2'>
                <p>$</p>
                <p>Per Month</p>
              </div>
            </div>
            <ul>
              <li className='flex items-center gap-2 mb-4'>
                <FaCircleCheck className='text-3xl text-success' /> Unlimited
                product updates
              </li>
              <li className='flex items-center gap-2 mb-4'>
                <FaCircleCheck className='text-3xl text-success' /> Unlimited
                product updates
              </li>
              <li className='flex items-center gap-2 mb-4'>
                <FaCircleCheck className='text-3xl text-success' /> Unlimited
                product updates
              </li>
              <li className='flex items-center gap-2 mb-4'>
                <FaCircleCheck className='text-3xl text-muted' /> 1GB Cloud
                storage
              </li>
              <li className='flex items-center gap-2 mb-4'>
                <FaCircleCheck className='text-3xl text-muted' /> Email and
                community support
              </li>
            </ul>
            <a
              className='bg-primary text-white py-2 block text-center rounded-lg'
              href='#'
            >
              Try for free
            </a>
          </div>
        </div>
        <div className=''>
          <h3 className='text-center'>Trusted By Over 4000 Big Companies</h3>
          <AboutTrustCompany />
        </div>
      </Wrapper>
      <section className='py-32 px-10'>
        <h2 className='text-3xl font-bold text-center mb-4'>Pricing FAQs</h2>
        <p className='text-center max-w-[552px] mx-auto text-xl text-secondary'>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 p-6 container max-w-[1056px] mb-12'>
          <div className='pl-8 relative'>
            <FaChevronRight className='absolute left-0 top-2 text-primary' />
            <h4 className='text-xl font-bold'>
              the quick fox jumps over the lazy dog
            </h4>
            <p className='text-secondary'>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>
          <div className='pl-8 relative'>
            <FaChevronRight className='absolute left-0 top-2 text-primary' />
            <h4 className='text-xl font-bold'>
              the quick fox jumps over the lazy dog
            </h4>
            <p className='text-secondary'>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>
          <div className='pl-8 relative'>
            <FaChevronRight className='absolute left-0 top-2 text-primary' />
            <h4 className='text-xl font-bold'>
              the quick fox jumps over the lazy dog
            </h4>
            <p className='text-secondary'>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>
          <div className='pl-8 relative'>
            <FaChevronRight className='absolute left-0 top-2 text-primary' />
            <h4 className='text-xl font-bold'>
              the quick fox jumps over the lazy dog
            </h4>
            <p className='text-secondary'>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>
          <div className='pl-8 relative'>
            <FaChevronRight className='absolute left-0 top-2 text-primary' />
            <h4 className='text-xl font-bold'>
              the quick fox jumps over the lazy dog
            </h4>
            <p className='text-secondary'>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>
          <div className='pl-8 relative'>
            <FaChevronRight className='absolute left-0 top-2 text-primary' />
            <h4 className='text-xl font-bold'>
              the quick fox jumps over the lazy dog
            </h4>
            <p className='text-secondary'>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>
        </div>
        <p className='text-secondary text-center text-xl'>
          Haven't got your answer? Contact our support
        </p>
      </section>
      <section className='flex flex-col items-center  py-28'>
        <h2 className='text-5xl font-bold text-center mb-7'>
          Start your 14 days free trial
        </h2>
        <p className=' mb-7 text-secondary max-w-[411px] text-center'>
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </p>
        <a
          className='bg-primary text-white py-2 px-6 text-center rounded-lg mb-7'
          href='#'
        >
          Try it now
        </a>
        <SocialCta />
      </section>
    </>
  )
}

export default pricing
