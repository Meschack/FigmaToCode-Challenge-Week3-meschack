import { SocialLinks } from '@/components/atoms';
import { SocialCta } from '@/components/atoms/social-cta';
import Image from 'next/image';
import React from 'react'
import { FaChevronRight, FaCircleCheck } from "react-icons/fa6";

const pricing = () => {
  return (
    <>
        
        <div className="topbar text-center py-12">
            <p className="mb-4">WHAT WE DO</p>
            <h1 className='text-3xl md:text-6xl mb-4'>Innovation tailored for you</h1>
            <ul className=''>
                <li className='inline'><a href="#">Home</a></li>
                <li className='inline-block ml-2'><a href="#">Team</a></li>
            </ul>
        </div>
        <section className='bg-[#FAFAFA] flex flex-col items-center'>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4 w-full">
            <Image alt="" className='w-full h-full sm:col-span-2 sm:row-span-2' src="/products/unsplash_Lks7vei-eAg.png" width={100} height={100} />
            <Image alt="" className='w-full h-full' src="/products/unsplash_1-aA2Fadydc.png" width={100} height={100} />
            <Image alt="" className='w-full h-full' src="/products/unsplash_gMsnXqILjp4.png" width={100} height={100} />
            <Image alt="" className='w-full h-full' src="/products/unsplash_mcSDtbWXUZU.png" width={100} height={100} />
            <Image alt="" className='w-full h-full' src="/products/unsplash_PSmDDeXaEWE.png" width={100} height={100} />
          </div>
        </section>
        <section className='bg-[#FAFAFA] flex flex-col items-center px-10'>
            <h2 className='text-3xl font-bold py-28'>Meet Our Team</h2>
                    
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 w-full">
                <div className="text-center mb-28">
                    <Image alt="" className='w-full mb-7' src="/team/team-1-user-1-1.jpg" width={100} height={100} />
                    <h4 className='font-bold mb-3'>Username</h4>
                    <p className='text-secondary mb-3'>Profession</p>
                    <SocialLinks justify=" justify-center" />
                </div>
                <div className="text-center mb-28">
                    <Image alt="" className='w-full mb-7' src="/team/team-1-user-1-2.jpg" width={100} height={100} />
                    <h4 className='font-bold mb-3'>Username</h4>
                    <p className='text-secondary mb-3'>Profession</p>
                    <SocialLinks justify=" justify-center" />
                </div>
                <div className="text-center mb-28">
                    <Image alt="" className='w-full mb-7' src="/team/team-1-user-1.jpg" width={100} height={100} />
                    <h4 className='font-bold mb-3'>Username</h4>
                    <p className='text-secondary mb-3'>Profession</p>
                    <SocialLinks justify=" justify-center" />
                </div>
                <div className="text-center mb-28">
                    <Image alt="" className='w-full mb-7' src="/team/team-1-user-2-1.jpg" width={100} height={100} />
                    <h4 className='font-bold mb-3'>Username</h4>
                    <p className='text-secondary mb-3'>Profession</p>
                    <SocialLinks justify=" justify-center" />
                </div>
                <div className="text-center mb-28">
                    <Image alt="" className='w-full mb-7' src="/team/team-1-user-2-2.jpg" width={100} height={100} />
                    <h4 className='font-bold mb-3'>Username</h4>
                    <p className='text-secondary mb-3'>Profession</p>
                    <SocialLinks justify=" justify-center" />
                </div>
                <div className="text-center mb-28">
                    <Image alt="" className='w-full mb-7' src="/team/team-1-user-2.jpg" width={100} height={100} />
                    <h4 className='font-bold mb-3'>Username</h4>
                    <p className='text-secondary mb-3'>Profession</p>
                    <SocialLinks justify=" justify-center" />
                </div>
                <div className="text-center mb-28">
                    <Image alt="" className='w-full mb-7' src="/team/team-1-user-3-1.jpg" width={100} height={100} />
                    <h4 className='font-bold mb-3'>Username</h4>
                    <p className='text-secondary mb-3'>Profession</p>
                    <SocialLinks justify=" justify-center" />
                </div>
                <div className="text-center mb-28">
                    <Image alt="" className='w-full mb-7' src="/team/team-1-user-3-2.jpg" width={100} height={100} />
                    <h4 className='font-bold mb-3'>Username</h4>
                    <p className='text-secondary mb-3'>Profession</p>
                    <SocialLinks justify=" justify-center" />
                </div>
                <div className="text-center mb-28">
                    <Image alt="" className='w-full mb-7' src="/team/team-1-user-3.jpg" width={100} height={100} />
                    <h4 className='font-bold mb-3'>Username</h4>
                    <p className='text-secondary mb-3'>Profession</p>
                    <SocialLinks justify=" justify-center" />
                </div>
            </div>
        </section>
        <section className="flex flex-col items-center  py-28">
            <h2 className='text-3xl md:text-5xl font-bold text-center mb-7'>Start your 14 days free trial</h2>
            <p className=' mb-7 text-secondary max-w-[411px] text-center'>
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.
            </p>
            <a className='bg-primary text-white py-2 px-6 text-center rounded rounded-lg mb-7' href="#">Try it now</a>
            <SocialCta />
        </section>
    </>
  )
}
export default pricing