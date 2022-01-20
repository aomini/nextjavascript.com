const Timeline = () => {
  return (
    <div className='flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50'>
      <div className='flex flex-row-reverse md:contents'>
        <div className='bg-white col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md'>
          <h3 className='font-semibold text-lg mb-1'>Lorem ipsum</h3>
          <p className='leading-tight text-justify'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
            quaerat?
          </p>
        </div>
        <div className='col-start-5 col-end-6 md:mx-auto relative mr-10'>
          <div className='h-full w-6 flex items-center justify-center'>
            <div className='h-full w-1 bg-danger pointer-events-none' />
          </div>
          <div className='w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-danger shadow' />
        </div>
      </div>
      <div className='flex md:contents'>
        <div className='col-start-5 col-end-6 mr-10 md:mx-auto relative'>
          <div className='h-full w-6 flex items-center justify-center'>
            <div className='h-full w-1 bg-danger pointer-events-none' />
          </div>
          <div className='w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-danger shadow' />
        </div>
        <div className='bg-white col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md'>
          <h3 className='font-semibold text-lg mb-1'>Lorem ipsum</h3>
          <p className='leading-tight text-justify'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae,
            facilis.
          </p>
        </div>
      </div>
      <div className='flex flex-row-reverse md:contents'>
        <div className='bg-white col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md'>
          <h3 className='font-semibold text-lg mb-1'>Lorem ipsum</h3>
          <p className='leading-tight text-justify'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
            quaerat?
          </p>
        </div>
        <div className='col-start-5 col-end-6 md:mx-auto relative mr-10'>
          <div className='h-full w-6 flex items-center justify-center'>
            <div className='h-full w-1 bg-danger pointer-events-none' />
          </div>
          <div className='w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-danger shadow' />
        </div>
      </div>
      <div className='flex flex-row-reverse md:contents'>
        <div className='bg-white col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md'>
          <h3 className='font-semibold text-lg mb-1'>Lorem ipsum</h3>
          <p className='leading-tight text-justify'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
            quaerat?
          </p>
        </div>
        <div className='col-start-5 col-end-6 md:mx-auto relative mr-10'>
          <div className='h-full w-6 flex items-center justify-center'>
            <div className='h-full w-1 bg-danger pointer-events-none' />
          </div>
          <div className='w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-danger shadow' />
        </div>
      </div>
      <div className='flex md:contents'>
        <div className='col-start-5 col-end-6 mr-10 md:mx-auto relative'>
          <div className='h-full w-6 flex items-center justify-center'>
            <div className='h-full w-1 bg-danger pointer-events-none' />
          </div>
          <div className='w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-danger shadow' />
        </div>
        <div className='bg-white col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md'>
          <h3 className='font-semibold text-lg mb-1'>Lorem ipsum</h3>
          <p className='leading-tight text-justify'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae,
            facilis.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Timeline;
