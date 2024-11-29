type HeaderNavbarProps = React.HTMLAttributes<HTMLDivElement>;

export function HeaderNavbar({ children, ...props }: HeaderNavbarProps) {
  return (
    <nav
      className="flex flex-row items-center justify-between gap-10"
      {...props}
    >
      {children}
    </nav>
  );
}
