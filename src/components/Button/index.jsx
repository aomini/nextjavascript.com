import clsx from 'clsx';
import Link from 'next/link';

const Button = ({
  className,
  color = 'primary',
  size = 'md',
  variant = 'contained',
  children,
  href = '',
}) => {
  const classes = clsx(
    'px-8 rounded-md hover:ring-2 active:ring-2 focus:ring-2 outline-none transition-colors duration-300',
    {
      'py-4 text-lg  uppercase font-semibold tracking-wider': size === 'lg',
      'py-3 text-base font-medium': size === 'md',
      'py-2 text-sm font-medium': size === 'sm',
    },
    {
      'bg-primary text-white ring-primary/50':
        variant === 'contained' && color === 'primary',
      'bg-danger text-white ring-danger/50':
        variant === 'contained' && color === 'danger',
      'bg-info text-white ring-info/50':
        variant === 'contained' && color === 'info',
      'bg-warning text-black ring-warning/50':
        variant === 'contained' && color === 'warning',
      'bg-light text-black border-2 border-solid border-gray-400 ring-gray-400/50':
        variant === 'contained' && color === 'light',
    },
    {
      'bg-none border-2 border-solid': variant === 'outlined',
      'text-danger border-danger hover:bg-danger hover:text-white hover:ring-0':
        variant === 'outlined' && color === 'danger',
    },

    className
  );

  if (href) {
    return (
      <Link href={href}>
        <a className={classes}>{children}</a>
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
};
export default Button;
