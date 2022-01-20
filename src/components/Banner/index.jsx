import React from 'react';
import CounterRing from '../CounterRing';
import Heading from '../Heading';
import ServicesCard from '../ServicesCard';
import Subheading from '../SubHeading';

const Banner = () => {
  return (
    <>
      <section className='mt-12 pb-12'>
        <div className='container'>
          <Heading as='h2' className='text-center font-semibold'>
            Get Started
          </Heading>
          <Subheading size='md' className='text-center'>
            Some lorem ipsum text that would extend this way upto here
          </Subheading>
          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4  gap-3 mt-12'>
            <div className=''>
              <CounterRing />
            </div>
            <div className=''>
              <CounterRing />
            </div>
            <div className=''>
              <CounterRing />
            </div>
            <div className=''>
              <CounterRing />
            </div>
          </div>
        </div>
      </section>
      <div className='bg-light py-12'>
        <div className='container'>
          <Heading as='h2' className='text-center  font-semibold'>
            Our <span className='text-info'>Services</span>
          </Heading>
          <div className='text-center'>
            <Subheading size='md' className='font-normal'>
              “Start a service bussiness when you are capable of delivering the
              best.”
            </Subheading>
          </div>
          <div className='w-2/5 mx-auto'>
            <p className='text-right'>- Leonardo da Vinci</p>
          </div>
        </div>
      </div>

      <div className='pb-16'>
        <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1'>
          <ServicesCard
            color='white'
            cardTitle='Cookie'
            cardTextFirst=" Simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s,"
            cardTextSecond='Explain more about what type of assessment it is. Also explain why the
          customer should choose on this subject.'
          />

          <ServicesCard
            color='primary'
            cardTitle='Test is the new '
            cardTextFirst=" Simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s,"
            cardTextSecond='Explain more about what type of assessment it is. Also explain why the
          customer should choose on this subject.'
          />
        </div>
        <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1'>
          <ServicesCard
            color='primary'
            cardTitle='Hello World'
            cardTextFirst=" Simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s,"
            cardTextSecond='Explain more about what type of assessment it is. Also explain why the
          customer should choose on this subject.'
          />
          <ServicesCard
            color='white'
            cardTitle='Hello Javascript'
            cardTextFirst=" Simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s,"
            cardTextSecond='Explain more about what type of assessment it is. Also explain why the
          customer should choose on this subject.'
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
