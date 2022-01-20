import React from 'react';
import Button from '@/components/Button';
import Heading from '@/components/Heading';
import SubHeading from '@/components/SubHeading';
import Navbar from '@/components/Navbar';
import OvalBox from '@/components/OvalBox';
import Banner from '@/components/Banner';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <main>
      <section
        className='bg-primary pb-4 lg:h-screen bg-no-repeat bg-contain bg-left bg-fixed'
        style={{
          backgroundImage: 'url(/circles.svg)',
        }}
      >
        <div className='flex flex-col h-full'>
          <Navbar />

          <div className='container py-4 flex flex-col xl:flex-row lg:flex-row md:flex-col sm:flex-col items-center justify-between flex-grow'>
            <div className='mt-8 md:mt-0'>
              <Heading className='text-white text-center lg:text-left capitalize font-light font-work-sans'>
                Extremely reliable <br />
                <span className='font-medium'>& perfect execution</span>
              </Heading>
              <SubHeading
                className='text-white leading-10 font-normal  text-center lg:text-left max-w-xl'
                size='lg'
              >
                Engineers benefit from our extremely high success rate of 99%,
                which was also proven by our clients.
              </SubHeading>
              <Button
                size='lg'
                color='danger'
                className='mb-8 md:mb-0 mt-12 flex mx-auto lg:mx-0'
              >
                Get Started
              </Button>
            </div>

            <div className='xl:my-0 lg:my-0 md:my-3 sm:my-5 xl:pt-0 lg:pt-0 md:pt-5 sm:pt-8 pt-10'>
              <div className='flex xl:gap-10 lg:gap-10   md:gap-6 sm:gap-2    items-center sm:items-start md:items-start lg:items-center xl:items-center xl:mt-0 lg:mt-0 md:mt-4 sm:mt-6'>
                <OvalBox />
                <div className='flex flex-col sm:flex-row md:flex-row lg:flex-col xl:flex-col    gap-28 sm:gap-2 md:gap-6  lg:gap-28 xl:gap-28   items-end'>
                  <OvalBox color='warning' />
                  <OvalBox color='info' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Banner />
      <Footer />
    </main>
  );
};
export default Home;
