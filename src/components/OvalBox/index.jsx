import Image from 'next/image';
import clsx from 'clsx';
import React from 'react';
import Heading from '../Heading';
import Subheading from '../SubHeading';

const OvalBox = ({ color = 'danger', src = undefined, className = '' }) => {
  return (
    <div className={clsx('relative', className)}>
      <div
        className={clsx(
          'w-36 h-36 xl:w-48 xl:h-40 rounded-3xl -rotate-12 opacity-40',
          {
            'bg-danger': color === 'danger',
            'bg-warning': color === 'warning',
            'bg-info': color === 'info',
            'bg-gray-300': color === 'grey',
          },
          {
            'w-64 h-56 md:w-80 md:h-56': !!src,
          }
        )}
      >
        {' '}
      </div>
      <div
        className={clsx(
          'w-36 h-36 xl:w-48 xl:h-40 rounded-[2rem] rotate-0 absolute top-0 left-0',
          {
            'bg-danger': color === 'danger',
            'bg-warning': color === 'warning',
            'bg-info': color === 'info',
            'bg-gray-300': color === 'grey',
          },
          {
            'w-64 h-56 md:w-80 md:h-56': !!src,
          }
        )}
      >
        <div className='grid flex-col justify-items-center m-auto mt-8'>
          {!src ? (
            <>
              <Heading as='h3' className='text-white mb-0'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-9 w-9'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z'
                    clipRule='evenodd'
                  />
                </svg>
              </Heading>
              <Subheading as='h5' className='text-white mb-0'>
                Fast Delivery
              </Subheading>
              <Heading as='h4' className='text-white mb-0'>
                +10%
              </Heading>
            </>
          ) : (
            <Image src={src} layout='fill' />
          )}
        </div>
      </div>
    </div>
  );
};

export default OvalBox;
