type FirstFoldCTARoot = React.HTMLAttributes<HTMLDivElement>;

export function FirstFoldCTARoot({ children, ...props }: FirstFoldCTARoot) {
  return (
    <div className="flex flex-row justify-between gap-4 mt-12" {...props}>
      {children}
    </div>
  );
}
