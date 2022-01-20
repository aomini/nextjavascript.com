import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Heading from '@/components/Heading';
import SubHeading from '@/components/SubHeading';
import OvalBox from '@/components/OvalBox';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

const AboutUs = () => {
  return (
    <main>
      <section className='bg-primary pb-4 lg:h-screen'>
        <div className='flex flex-col h-full'>
          <Navbar />
          <div className='container py-4 flex flex-col xl:flex-row lg:flex-row md:flex-col sm:flex-col items-center justify-between flex-grow'>
            <div className='basis-1/2'>
              <Heading className='text-white capitalize font-light font-work-sans'>
                About <span className='font-medium'>Us</span>
              </Heading>
              <SubHeading
                className='text-white leading-10 font-normal'
                size='lg'
              >
                We are one of the best company in town to fulfill your needs.The
                quality of services we provide is beyound the capability of
                others.
              </SubHeading>
            </div>
            <Image
              src='/about-us.svg'
              width={505}
              height={414}
              alt='a man using a computer on a desk with a cat lying down.'
            />
          </div>
        </div>
      </section>
      <section className='container py-12'>
        <Heading as='h2' className='text-center font-semibold'>
          The Lead Supervisor
        </Heading>
        <SubHeading size='md' className='text-center'>
          Meet the man behind all of our client’s succesful stories
        </SubHeading>
        <div className='flex flex-wrap md:flex-nowrap justify-center w-full lg:w-10/12 mx-auto mt-20'>
          <OvalBox
            src='/lead.png'
            color='grey'
            className='shrink-0 basis-1/3'
          />
          <div className='mt-10 md:mt-0 md:ml-10'>
            <Heading as='h3' className='font-semibold text-center md:text-left'>
              <span className='font-light'>Hi, I am</span> Don Joe
            </Heading>
            <SubHeading size='sm' className='text-left'>
              Write down some lorem ipsum text here Write down some lorem ipsum
              text here Write down some lorem ipsum text here
              {/* I’m an Engineer and a PR holder in Australia. I officially became
              an engineer in 2015 & since then my primary goal has become to
              help other people acheive the same goal. <br />
              <br />
              In this <b>mission</b>, I am accompanied by great team who are
              professionals on writing up your assessments and CDR reports.
              Trust me they can do wonders. <br />
              <br />
              <b>Leave the hard work</b> for us while you can take some break. */}
            </SubHeading>
          </div>
        </div>
      </section>
      <section
        className='py-12 h-[35rem] bg-cover bg-fixed bg-center flex items-center'
        style={{
          backgroundImage: 'url("/teams.jpg")',
        }}
      >
        {/*eslint-disable-next-line react/self-closing-comp */}
        <div
          className='h-[20rem] w-[35rem] bg-white/30 backdrop-blur-sm mx-auto rounded-lg py-16'
          style={{
            backgroundImage: 'url("/noise.png")',
          }}
        >
          <Heading as='h3' className='text-white text-center'>
            Are you on board?
          </Heading>
          <SubHeading size='sm' className='text-white text-center'>
            You can get best deals with us. <br />
            Not sure yet? You can have a chat with one of representative.
          </SubHeading>
          <div className='text-center'>
            <Button size='lg' color='danger'>
              Pricing
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};
export default AboutUs;
