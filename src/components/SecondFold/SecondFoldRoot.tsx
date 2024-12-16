type SecondFoldRootProps = React.HTMLAttributes<HTMLDivElement>;

export function SecondFoldRoot({ children, ...props }: SecondFoldRootProps) {
  return (
    <div
      className="bg-white w-full h-[calc(150vh+120px)] flex flex-col items-center justify-start"
      {...props}
    >
      {children}
    </div>
  );
}
