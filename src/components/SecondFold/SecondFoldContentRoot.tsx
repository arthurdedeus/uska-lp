type SecondFoldContentRootProps = React.HTMLAttributes<HTMLDivElement>;

export function SecondFoldContentRoot({
  children,
  ...props
}: SecondFoldContentRootProps) {
  return (
    <div className="flex flex-row w-[50%] mt-[120px] gap-12" {...props}>
      {children}
    </div>
  );
}
