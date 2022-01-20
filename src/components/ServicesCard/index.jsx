import React from 'react';
import clsx from 'clsx';
import Button from '../Button';
import Heading from '../Heading';
import Subheading from '../SubHeading';

const ServicesCard = ({
  color = 'white',
  cardTitle,
  cardTextFirst,
  cardTextSecond,
}) => {
  return (
    <div
      className={clsx('w-2/2 h-100  p-4', {
        'bg-white': color === 'white',
        'bg-primary': color === 'primary',
      })}
    >
      <div
        className={clsx('w-10/12 m-auto py-7 xl:pl-4 lg:pl-4 md:pl-2 sm:pl-0', {
          'text-white': color === 'primary',
          'text-black': color === 'white',
        })}
      >
        <Heading
          as='h3'
          className={clsx('font-semibold', {
            'text-danger': color === 'white',
            'text-white': color === 'primary',
          })}
        >
          {cardTitle}
        </Heading>
        <Subheading size='sm' className='leading-8'>
          {cardTextFirst}
        </Subheading>
        <Subheading size='sm' className='leading-8'>
          {cardTextSecond}
        </Subheading>
        <Button
          size='md'
          color='danger'
          variant={color === 'primary' ? 'contained' : 'outlined'}
          href='/services/test`'
        >
          Learn More
        </Button>
        {/* <Button
          className={clsx('px-20 text-danger border-danger border-2', {
            'bg-white': btnBg === 'white',
            'bg-danger': btnBg === 'danger',
          })}
        ></Button> */}
      </div>
    </div>
  );
};

export default ServicesCard;
