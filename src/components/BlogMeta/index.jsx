/** Shows the published data & reading time */
const BlogMeta = ({ displayCategory = false }) => {
  return (
    <div className='flex items-center gap-3 text-gray-400 font-semibold'>
      <p className='mb-0 text-xs uppercase'>6 days ago</p>
      <span className='h-1 w-1 inline-block bg-gray-400 rounded-full mx-2' />
      <p className='mb-0 text-xs uppercase'>5 min read</p>
      {displayCategory && (
        <>
          <span className='h-1 w-1 inline-block bg-gray-400 rounded-full mx-2' />

          <p className='mb-0 text-sm uppercase text-danger font-semibold'>
            Educational
          </p>
        </>
      )}
    </div>
  );
};
export default BlogMeta;
