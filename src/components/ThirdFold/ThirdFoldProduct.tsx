type ThirdFoldProductProps = {
  text: string;
  image: string;
};
export function ThirdFoldProduct({ text, image }: ThirdFoldProductProps) {
  return (
    <div className="bg-secondary h-[200px] w-[280px] rounded-2xl relative overflow-hidden">
      <img
        src={image}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[75%] w-auto object-contain z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/75 z-10"></div>
      <h1 className="absolute bottom-4 left-4 text-paragraph-alt1 z-20">
        {text}
      </h1>
    </div>
  );
}
