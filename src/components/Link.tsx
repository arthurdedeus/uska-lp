type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  isSelected?: boolean;
};

export function Link({ children, isSelected = false, ...props }: LinkProps) {
  const dynamicStyle = isSelected
    ? "text-secondary hover:text-white font-bold underline underline-offset-8"
    : "text-white hover:text-secondary";
  return (
    <a
      href="#"
      className={`font-poppins text-paragraph transition-colors duration-150 ease-in-out  ${dynamicStyle} `}
      {...props}
    >
      {children}
    </a>
  );
}
