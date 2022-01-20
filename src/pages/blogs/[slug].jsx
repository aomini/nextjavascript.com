import BlogMeta from '@/components/BlogMeta';
import FeaturedImage from '@/components/FeaturedImage';
import Navbar from '@/components/Navbar';
import PostSidebar from '@/components/PostSidebar';

const BlogSlug = () => {
  return (
    <main>
      <Navbar color='white' />
      <section className='block container mt-16'>
        <div className='shrink-0 flex-1 md:mr-8 md:px-8'>
          <div className='flex items-center flex-col mb-8'>
            <h1 className='text-center'>
              The Front-end Developer Roadmap - How to Become One
            </h1>
            <BlogMeta />
          </div>
          <FeaturedImage />
          <p>
            Do you want to become a front-end developer? This is the right
            place.
          </p>
          <h2>Introduction</h2>
          <p>
            You scoured the internet and couldn't find a clear answer to what is
            front-end development and how can you become a front-end developer?
            The purpose of this article is to put your thoughts in order, to
            establish the point from which you start, and to get a vision of
            what the frontend-developer branch means. This article is structured
            so that it is easy for beginners who want to learn web development,
            but also for those who took part in the journey to becoming a
            frontend developer and are looking for a new challenge.
          </p>
          <h2>What is a front-end developer?</h2>
          <p>
            A front-end developer is a person who develops the interface of an
            application. Everything you see on a website or application was done
            by a frontend developer. "Login" page, "Contact us" page, buttons,
            fonts, forms; all of these falls under the front-end development
            term. At first, in order to be called a front-end developer, it was
            enough to know 3 things: HTML, CSS, Javascript. In these times it is
            not enough to know only the 3 languages, at least not in basic form.
            Over the years, many frameworks have been developed, both for CSS
            and Javascript. This means, if you want to become a frontend
            developer you must know at least a CSS framework and/or a Javascript
            framework. Short Definition: Front-end developers create and
            optimize the website interface and make sure the elements look great
            on all devices: smartphones, tablets, and desktops.
          </p>
          <h3>6 Steps to Become a Front-end Developer</h3>
          <p>
            In order to better understand what is presented in this article, it
            is good to find answers to the following questions and to know, at a
            basic level, the following terms. These skills are not necessary,
            but they will definitely help you in your journey.
          </p>
          <h4>How to be smart?</h4>
          <p>
            You understand what is presented in this article, it is good to find
            answers to the following questions and to know, at a basic level,
            the following terms. These skills are not necessary, but they will
            definitely help you in your journey.
          </p>
        </div>
        <PostSidebar />
      </section>
    </main>
  );
};
export default BlogSlug;
