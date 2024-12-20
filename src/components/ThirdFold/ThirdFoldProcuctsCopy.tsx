type ThirdFoldProductsCopy = React.HTMLAttributes<HTMLDivElement>;

export function ThirdFoldProcuctsCopy({ ...props }: ThirdFoldProductsCopy) {
  return (
    <div className="flex flex-col gap-4 mt-16" {...props}>
      <h1 className="text-h2 text-white">Produtos Disponíveis</h1>
      <p className="text-paragraph text-white">
        Os principais tesouros do mundo geek ao seu alcance!
      </p>
    </div>
  );
}
