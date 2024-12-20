type FirstFoldRootProps = React.HTMLAttributes<HTMLDivElement>;

export function FirstFoldRoot({ children, ...props }: FirstFoldRootProps) {
  return (
    <div
      className="h-[calc(100vh-7rem)] w-[50%] flex flex-col justify-between items-center"
      {...props}
    >
      {children}
    </div>
  );
}
