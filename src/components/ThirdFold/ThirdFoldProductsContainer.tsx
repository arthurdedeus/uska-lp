type ThirdFoldProductsContainerProps = React.HTMLAttributes<HTMLDivElement>;

export function ThirdFoldProductsContainer({
  children,
  ...props
}: ThirdFoldProductsContainerProps) {
  return (
    <div className="flex flex-row gap-4 mt-10" {...props}>
      {children}
    </div>
  );
}
