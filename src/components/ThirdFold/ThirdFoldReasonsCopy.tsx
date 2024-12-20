type ThirdFoldReasonsCopyProps = React.HTMLAttributes<HTMLHeadingElement>;

export function ThirdFoldReasonsCopy({ ...props }: ThirdFoldReasonsCopyProps) {
  return (
    <h1 className="text-h2 mt-16" {...props}>
      Mais Motivos Para Fazer Parte
    </h1>
  );
}
