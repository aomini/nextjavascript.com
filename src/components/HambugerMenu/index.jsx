import Link from 'next/link';
import Portal from '@reach/portal';

const HamburgerMenu = ({ navigations }) => {
  return (
    <Portal>
      <div
        className='z-50'
        style={{
          position: 'absolute',
          display: 'block',
          top: '68px',
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <div
          className='flex flex-col h-full pb-12 overflow-y-scroll bg-white'
          style={{ opacity: 1, transform: 'none' }}
        >
          {navigations.map(({ title, link }, index) => (
            <div
              key={index}
              aria-labelledby='menu-button--menu'
              role='menu'
              tabIndex='-1'
              className='p-0 bg-transparent border-b border-gray-200 px-2'
            >
              <Link href={link}>
                <a
                  role='menuitem'
                  tabIndex='-1'
                  className='block container font-normal font-work-sans hover:bg-secondary focus:bg-secondary text-black py-6 hover:text-team-current '
                  data-valuetext='Home'
                >
                  {title}
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Portal>
  );
};
export default HamburgerMenu;
