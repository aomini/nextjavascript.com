import Link from 'next/link';
import Heading from '@/components/Heading';
import Navbar from '@/components/Navbar';
import BlogMeta from '@/components/BlogMeta';
import PostSidebar from '@/components/PostSidebar';
import FeaturedImage from '@/components/FeaturedImage';

const BlogCard = ({ image = true }) => {
  return (
    <div>
      {/* {image && <FeaturedImage />} */}
      <Heading as='h2' variant='h4' className='mb-4'>
        The Complete Roadmap for Becoming a Backend Developer: Step-By-Step
        Instructions
      </Heading>
      <BlogMeta displayCategory />
      <p className='mt-8'>
        Interested in becoming a backend developer? You’ve come to the right
        place. If you’ve got some coding experience but are new to programming,
        this guide will teach you all about backend
      </p>
      <hr className='text-gray-200 mt-8 mb-4' />
      <Link href='/blogs/some-blog-slug'>
        <a className='text-danger text-sm uppercase font-semibold flex justify-end'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z'
              clipRule='evenodd'
            />
          </svg>
          Read Now
        </a>
      </Link>
    </div>
  );
};

const Home = () => {
  return (
    <main>
      <Navbar color='white' heading='Blogs' />
      <section className='block md:block lg:flex container mt-16'>
        <div className='shrink-0 flex-1 md:mr-8  md:px-8 grid gap-8'>
          <BlogCard />
          <BlogCard />
          <BlogCard image={false} />
          <BlogCard image={false} />
        </div>

        <PostSidebar />
      </section>
    </main>
  );
};
export default Home;
