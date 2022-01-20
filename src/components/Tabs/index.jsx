import clsx from 'clsx';
import React from 'react';
import reactHtmlParser from 'react-html-parser';
import Heading from '../Heading';
import SubHeading from '../SubHeading';

const Tabs = ({ data, className = '' }) => {
  const [activeTab, setActiveTab] = React.useState(null);

  React.useEffect(() => {
    if (window.location.hash) {
      setActiveTab(window.location.hash);
    } else {
      setActiveTab(`#${data[0].id}`);
    }
  }, [data]);

  return (
    <div className={className}>
      <Heading as='h2' variant='h3' className='text-danger'>
        Things You must Know
      </Heading>
      <SubHeading size='md'>
        You should be able to submit these document and give follow up on the
        queries when our team request of you. <br />
        More of these are detailed below.
      </SubHeading>

      <ul className='grid grid-cols-3 backdrop-saturate-150 backdrop-blur-[6px] mb-0 text-center font-medium border-b border-solid border-gray-400 tabs sticky top-0 '>
        {data.map((tab, index) => (
          <li
            key={data.id}
            className='mb-0 px-1 py-2 font-work-sans font-normal'
          >
            <a
              href={`#${tab.id}`}
              onClick={() => setActiveTab(`#${tab.id}`)}
              className={clsx({
                'text-black': activeTab === `#${tab.id}`,
                'text-gray-500': activeTab !== `#${tab.id}`,
              })}
            >
              <span
                className={clsx(
                  'p-1 inline-block w-8 mr-1 rounded-full text-base',
                  {
                    'bg-warning': activeTab === `#${tab.id}`,
                    'bg-gray-300': activeTab !== `#${tab.id}`,
                  }
                )}
              >
                {index + 1}
              </span>
              <span>{tab.title}</span>
            </a>
          </li>
        ))}
      </ul>
      <div className='flex overflow-hidden scroll-smooth mt-10'>
        {data.map(({ title, content, id }) => (
          <div key={id} id={id} className='w-full shrink-0'>
            <Heading as='h2' variant='h3' className='text-black'>
              {title}
            </Heading>
            {reactHtmlParser(content)}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Tabs;
