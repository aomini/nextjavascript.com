import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import Headroom from 'react-headroom';
import Button from '../Button';
import Heading from '../Heading';

const HamburgerMenu = dynamic(() => import('../HambugerMenu'));

/** Top navigations */
const navigations = [
  {
    title: 'Home',
    link: '/',
    pattern: '/',
  },
  {
    title: 'Blog',
    link: '/blogs',
    pattern: '/blogs',
    quickLink: true,
  },
  {
    title: 'About',
    link: '/about-us',
    pattern: '/about-us',
  },
  {
    title: 'Contact',
    link: '/contact',
    pattern: '/contact',
  },
];

const Navbar = ({ color, heading }) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const body = document.body;
    if (navbarOpen) {
      body.classList.add('fixed', 'h-screen');
    } else {
      body.classList.remove('fixed', 'h-screen');
    }
  }, [navbarOpen]);

  const textColor = color === 'white' ? 'text-black' : 'text-white';

  return (
    <Headroom
      onPin={() => {
        document.documentElement.classList.add('dark');
      }}
      onUnfix={() => {
        document.documentElement.classList.remove('dark');
      }}
    >
      {navbarOpen && <HamburgerMenu navigations={navigations} />}
      <nav
        className={clsx(
          'relative flex flex-wrap items-center justify-between py-4',
          { 'border-b border-solid border-gray-200': color === 'white' }
        )}
      >
        <div className='md:flex container mx-auto md:flex-start items-center justify-between'>
          <div className='relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
            <div className='flex items-center'>
              <Link href='/'>
                <a className={`flex  dark:text-black text-3xl ${textColor}`}>
                  <b>Java</b>script
                </a>
              </Link>
              {!!heading && (
                <Heading
                  as='h1'
                  className='pl-4 ml-4 mb-0 border-l border-solid border-black'
                  variant='h3'
                >
                  {heading}
                </Heading>
              )}
            </div>
            <button
              className='text-white bg-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden xl:hidden md:hidden outline-none focus:outline-none'
              type='button'
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <div
                className={`h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300 ${
                  navbarOpen
                    ? 'rotate-45 translate-y-2 opacity-50 group-hover:opacity-100'
                    : 'opacity-50 group-hover:opacity-100'
                }`}
              />
              <div
                className={`h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300 ${
                  navbarOpen
                    ? 'opacity-0'
                    : 'opacity-50 group-hover:opacity-100'
                }`}
              />
              <div
                className={`h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300 ${
                  navbarOpen
                    ? '-rotate-45 -translate-y-2 opacity-50 group-hover:opacity-100'
                    : 'opacity-50 group-hover:opacity-100'
                }`}
              />
            </button>
            {/* <button
              className='flex flex-col h-12 w-12 border-2 border-black rounded justify-center items-center group'
              onClick={() => setIsOpen(!isOpen)}
            >
              <div
                className={`${genericHamburgerLine} ${
                  isOpen
                    ? 'rotate-45 translate-y-3 opacity-50 group-hover:opacity-100'
                    : 'opacity-50 group-hover:opacity-100'
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  isOpen ? 'opacity-0' : 'opacity-50 group-hover:opacity-100'
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  isOpen
                    ? '-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100'
                    : 'opacity-50 group-hover:opacity-100'
                }`}
              />
            </button> */}
          </div>
          <div
            className='md:items-center hidden sm:show md:flex justify-end items-left w-full md:w-auto md:order-1 mr-0 flex-col-reverse xl:flex-row lg:flex-row md:flex-row sm:flex-col-reverse flex-grow mt-4 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-4'
            id='example-navbar-danger'
          >
            <ul className='flex-col dark:hidden xl:flex-row  md:flex-row flex md:space-x-8 mt-4 mb-0 md:mt-0 md:text-sm md:font-medium mx-4'>
              {navigations.map(({ title, link, pattern }, index) => (
                <li className='mb-0 flex items-center' key={index}>
                  <Link href={link}>
                    <a
                      className={clsx(
                        'xl:underlined lg:underlined md:underlined hover:text-white text-gray-400 text-lg  border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700',
                        {
                          active: router.asPath === pattern,
                          'hover:text-black focus:text-black':
                            color === 'white',
                          '!text-black':
                            (router.asPath === pattern) & (color === 'white'),
                        }
                      )}
                      aria-current={router.asPath === pattern}
                    >
                      {title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
            <Button
              size='sm'
              color='info'
              variant='contained'
              className={clsx(
                'bg-[#2d1e85] dark:bg-danger text-white border-none mx-2 btn-sm',
                {
                  'bg-black': color === 'white',
                }
              )}
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </nav>
    </Headroom>
  );
};

export default Navbar;
