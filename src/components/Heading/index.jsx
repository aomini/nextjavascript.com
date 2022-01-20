import clsx from 'clsx';

const Heading = ({ as: As = 'h1', variant, className, children, ...rest }) => {
  return (
    <As className={clsx(variant ? variant : As, className)} {...rest}>
      {children}
    </As>
  );
};
export default Heading;
