type FooterRootProps = React.HTMLAttributes<HTMLDivElement>;

export function FooterRoot({ children, ...props }: FooterRootProps) {
  return (
    <>
      <hr className="border-1 border-dark-grey w-[75%]" />
      <div
        className="h-40 w-[75%] bottom-0 flex items-center justify-between"
        {...props}
      >
        {children}
      </div>
    </>
  );
}
