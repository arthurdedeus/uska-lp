import { Link } from "../Link";

type FooterLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function FooterLink({ children, ...props }: FooterLinkProps) {
  return (
    <Link
      className={`text-paragraph-alt2 text-white hover:text-secondary`}
      {...props}
    >
      {children}
    </Link>
  );
}
