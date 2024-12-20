type FooterSocialMediaProps = React.HTMLAttributes<HTMLDivElement>;

export function FooterSocialMedia({
  children,
  ...props
}: FooterSocialMediaProps) {
  return (
    <nav
      className="flex flex-row items-center justify-between gap-4"
      {...props}
    >
      {children}
    </nav>
  );
}
