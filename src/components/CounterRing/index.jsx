import React from 'react';
import Subheading from '../SubHeading';

const CounterRing = () => {
  return (
    <div className='p-2 grid flex-col justify-items-center'>
      <Subheading size='md' className='text-center'>
        Cookie
      </Subheading>
      <button
        className='w-20 h-20 bg-danger rounded-full ring-offset-2 ring-4 ring-danger hover:ring-primary 
      '
      >
        {' '}
        Start
      </button>
    </div>
  );
};

export default CounterRing;
