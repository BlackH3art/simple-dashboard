import { FC } from 'react';

export const Navigation: FC = () => {

  return (
    <nav className='w-full h-20 flex justify-center bg-gray-800'>
      <div className='w-full md:w-4/5 2xl:w-3/5 flex justify-between items-center'>

        <h2 className='text-2xl text-white'>
          Simple Dashboard
        </h2>

      </div>
    </nav>
  )
}