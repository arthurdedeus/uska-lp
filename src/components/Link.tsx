type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  isSelected?: boolean;
};

export function Link({ children, className, ...props }: LinkProps) {
  return (
    <a
      href="#"
      className={`font-poppins  transition-colors duration-150 ease-in-out underline-offset-8 ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
