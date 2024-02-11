import Image from 'next/image'
import { SocialLinks } from '../atoms'

import firstMember from '@/assets/images/team-1-user-1.png'
import secondMember from '@/assets/images/team-1-user-2.png'
import thirdMember from '@/assets/images/team-1-user-3.png'

const team = [
  {
    name: 'Jane Doe',
    profession: 'Profession',
    photo: firstMember,
  },
  {
    name: 'Alicia Mberry',
    profession: 'Profession',
    photo: secondMember,
  },
  {
    name: 'John Doe',
    profession: 'Profession',
    photo: thirdMember,
  },
]

export const AboutTeamSection = () => {
  return (
    <div className='flex flex-col gap-5 items-center'>
      <h2>Meet our team</h2>

      <p className='text-gray-600 text-center'>
        Problems trying to resolve the conflict between the two major realms of
        Classical physics: Newtonian mechanics
      </p>

      <div className='grid justify-between gap-10 grid-cols-1 lg:grid-cols-3 w-full'>
        {team.map((member) => (
          <div className='flex flex-col gap-3' key={member.name}>
            <Image
              src={member.photo}
              alt={`${member.name}'s photo`}
              className='w-full'
              priority
            />

            <div className='flex flex-col gap-3 items-center px-3'>
              <h3>{member.name}</h3>

              <span>{member.profession}</span>

              <SocialLinks />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
