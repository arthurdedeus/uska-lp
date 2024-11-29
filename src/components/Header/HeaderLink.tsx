import { Link } from "../Link";

type HeaderLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  isSelected?: boolean;
};

export function HeaderLink({
  children,
  isSelected,
  ...props
}: HeaderLinkProps) {
  const dynamicStyle = isSelected
    ? "text-secondary hover:text-white font-bold underline "
    : "text-white hover:text-secondary";
  return (
    <Link className={`text-paragraph ${dynamicStyle}`} {...props}>
      {children}
    </Link>
  );
}
