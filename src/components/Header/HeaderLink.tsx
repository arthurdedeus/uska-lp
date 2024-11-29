import { Link } from "../Link";

type HeaderLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  isSelected?: boolean;
};

export function HeaderLink({ children, ...props }: HeaderLinkProps) {
  return <Link {...props}>{children}</Link>;
}
