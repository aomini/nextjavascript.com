import Heading from '@/components/Heading';
import BlogMeta from '../BlogMeta';

const posts = [
  {
    title: 'The Complete Web Developer Bootcamp',
    id: 1,
  },
  {
    title: 'Devops Intermediate Examination',
    id: 2,
  },
  {
    title: 'Git vs Gitlab: The Actual Differences',
    id: 2,
  },
];

const tags = [
  {
    id: 1,
    title: 'Educational',
  },
  {
    id: 2,
    title: 'Github',
  },
  {
    id: 3,
    title: 'NginX',
  },
  {
    id: 4,
    title: 'React',
  },
];

const PostSidebar = () => {
  return (
    <div className='w-80 shrink-0 invisible md:invisible lg:visible'>
      <div className='sticky top-8'>
        <p className='uppercase text-sm text-gray-500 mb-0 px-2'>
          recent posts
        </p>
        <hr className='text-gray-200 my-2' />
        <ul className='px-2'>
          {posts.map(({ title, id }) => (
            <li key={id}>
              <Heading
                as='h2'
                variant='body'
                className='mb-2 overflow-hidden text-ellipsis whitespace-nowrap font-normal'
                title={title}
              >
                {title}
              </Heading>
              <BlogMeta />
            </li>
          ))}
        </ul>

        <p className='uppercase text-sm text-gray-500 mb-0 px-2 mt-8'>tags</p>
        <hr className='text-gray-200 my-2' />
        <ul className='px-2'>
          {tags.map(({ title, id }) => (
            <li key={id}>
              <Heading
                as='h2'
                variant='body'
                className='mb-2 overflow-hidden text-ellipsis whitespace-nowrap font-normal'
                title={title}
              >
                {title}
              </Heading>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default PostSidebar;
