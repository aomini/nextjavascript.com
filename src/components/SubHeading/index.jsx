import clsx from 'clsx';

const SubHeading = ({ className, size = 'sm', children }) => {
  return (
    <p
      className={clsx(
        {
          'text-base': size === 'sm',
          'text-xl': size === 'md',
          'text-2xl': size === 'lg',
        },
        className
      )}
    >
      {children}
    </p>
  );
};
export default SubHeading;
