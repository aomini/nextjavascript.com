import Heading from '@/components/Heading';
import SubHeading from '@/components/SubHeading';

const CallToAction = () => {
  return (
    <section className='mx-auto border-solid border-[1px] rounded-lg text-white flex items-center justify-center flex-col p-8 xl:w-1/2 lg:w-1/2 md:w/2/2 sm:w-2/2'>
      <Heading as='h2' className='flex items-center relative font-semibold'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-16 w-16 mr-4 text-warning absolute left-[-5rem] hidden xl:block lg:block md:hidden sm:hidden'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
          />
        </svg>
        Get a Quote
      </Heading>
      <SubHeading size='md'>We make the prices you set deal</SubHeading>
      <div className='flex items-center'>
        <div className=''>
          <SubHeading size='md' className='mb-4 text-center'>
            Call us at <b>+888-888-8888</b>
          </SubHeading>
          <SubHeading size='md' className='mb-0 text-center'>
            Email us at <b>quote@javascript.com</b>
          </SubHeading>
        </div>
      </div>
    </section>
  );
};
export default CallToAction;
