type FirstFoldContentRootProps = React.HTMLAttributes<HTMLDivElement>;

export function FirstFoldContentRoot({
  children,
  ...props
}: FirstFoldContentRootProps) {
  return (
    <div className="flex flex-row mt-32 gap-16" {...props}>
      {children}
    </div>
  );
}
