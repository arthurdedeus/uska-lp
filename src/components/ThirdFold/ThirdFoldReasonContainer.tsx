type ThirdFoldReasonContainerProps = React.HTMLAttributes<HTMLDivElement>;

export function ThirdFoldReasonContainer({
  children,
  ...props
}: ThirdFoldReasonContainerProps) {
  return (
    <div className="flex flex-row justify-between mt-16" {...props}>
      {children}
    </div>
  );
}
