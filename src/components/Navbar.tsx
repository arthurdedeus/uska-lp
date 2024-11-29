type NavbarProps = React.HTMLAttributes<HTMLDivElement>;

export function Navbar({ children, ...props }: NavbarProps) {
  return (
    <nav
      className="flex flex-row items-center justify-between gap-10"
      {...props}
    >
      {children}
    </nav>
  );
}
