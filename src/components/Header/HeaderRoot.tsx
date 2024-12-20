type HeaderRootProps = React.HTMLAttributes<HTMLDivElement>;

export function HeaderRoot({ children, ...props }: HeaderRootProps) {
  return (
    <div className="w-[75%] mt-14 flex justify-between" {...props}>
      {children}
    </div>
  );
}
