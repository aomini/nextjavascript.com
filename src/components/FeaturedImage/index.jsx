import Image from 'next/image';

const FeaturedImage = () => {
  return (
    <div className='rounded-lg mb-8'>
      <Image
        alt='Mountains'
        className='rounded-xl'
        src='https://www.creative-tim.com/blog/content/images/size/w1920/2021/12/how-to-become-backend-developer.jpg'
        layout='responsive'
        width={775}
        height={347}
      />
    </div>
  );
};
export default FeaturedImage;
