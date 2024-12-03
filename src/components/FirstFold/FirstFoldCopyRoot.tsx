type FirstFoldCopyRoot = React.HTMLAttributes<HTMLDivElement>;

export function FirstFoldCopyRoot({ children, ...props }: FirstFoldCopyRoot) {
  return (
    <div className="flex flex-col justify-center" {...props}>
      {children}
    </div>
  );
}
