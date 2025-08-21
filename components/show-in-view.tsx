import { useInView } from 'react-intersection-observer';

export type ShowInViewProps = {
  children: React.ReactNode;
  rootMargin?: string;
  triggerOnce?: boolean;
};

export const ShowInView = ({
  children,
  rootMargin = '0px',
  triggerOnce = true,
  ...rest
}: ShowInViewProps) => {
  const { ref, inView } = useInView({
    rootMargin,
    triggerOnce,
  });

  return (
    <div data-role="intersection-observer" ref={ref} {...rest}>
      {inView && children}
    </div>
  );
};
