type ThirdFoldRootProps = React.HTMLAttributes<HTMLDivElement>;

export function ThirdFoldRoot({ children, ...props }: ThirdFoldRootProps) {
  return (
    <div
      className="terceira-dobra text-white h-[200vh] w-[50%] flex flex-col justify-start"
      {...props}
    >
      {children}
    </div>
  );
}
