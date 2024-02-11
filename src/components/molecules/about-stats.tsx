const stats = [
  {
    title: 'Happy customers',
    stat: '15K',
  },
  {
    title: 'Monthly visitors',
    stat: '150K',
  },
  {
    title: 'Countries worldwide',
    stat: '15',
  },
  {
    title: 'Top partners',
    stat: '100+',
  },
]

export const AboutStats = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between items-center py-10 gap-5'>
      {stats.map((stat) => (
        <div
          className='flex flex-col items-center justify-center gap-3'
          key={stat.title}
        >
          <strong className='text-2xl'>{stat.stat}</strong>
          <span className='text-gray-600'>{stat.title}</span>
        </div>
      ))}
    </div>
  )
}
