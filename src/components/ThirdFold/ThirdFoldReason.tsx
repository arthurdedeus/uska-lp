type ThirdFoldReasonProps = {
  text: string;
  image: string;
};

export function ThirdFoldReason({ text, image }: ThirdFoldReasonProps) {
  return (
    <div className="bg-gradient-to-r from-light-purple to-primary h-[312px] w-[300px] rounded-2xl p-8 flex flex-col items-end">
      <div className="flex flex-1 flex-col">
        <h3 className="text-h3 whitespace-pre-line">{text}</h3>
        <p>
          Todos os vendedores passam por uma verificação, garantindo segurança
          na sua compra.
        </p>
      </div>
      <img src={image} className="w-16 h-auto" />
    </div>
  );
}
