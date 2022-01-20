import CallToAction from '@/components/CallToAction';
import Heading from '@/components/Heading';

const Footer = () => {
  return (
    <section
      className='container bg-primary pt-16 text-white'
      style={{ backgroundImage: 'url(/lines.svg)' }}
    >
      <CallToAction />
      <footer className='grid gap-4 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1  mt-16'>
        <div>
          <Heading as='h3' className='font-light text-2xl'>
            Javascript
          </Heading>
          <p className='lg:w-2/3'>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div className='grid grid-cols-3 gap-2'>
          <div>
            <Heading
              as='h3'
              className='font-semibold text-xl sm:text-xl  xl:text-2xl lg:text-2xl md:text-2xl '
            >
              Company
            </Heading>
            <ul>
              <li>About Us</li>
              <li>Contact</li>
              <li>Blogs</li>
            </ul>
          </div>
          <div>
            <Heading
              as='h3'
              className='font-semibold text-xl sm:text-xl  xl:text-2xl lg:text-2xl md:text-2xl '
            >
              Services
            </Heading>
            <ul>
              <li>Teaching javascript</li>
              <li>HTml</li>
              <li>Devops</li>
              <li>PHP</li>
            </ul>
          </div>
          <div>
            <Heading
              as='h3'
              className='font-semibold text-xl sm:text-xl  xl:text-2xl lg:text-2xl md:text-2xl '
            >
              Contact
            </Heading>
            <ul>
              <li>Support</li>
              <li>Sales</li>
            </ul>
          </div>
        </div>
      </footer>
    </section>
  );
};
export default Footer;
