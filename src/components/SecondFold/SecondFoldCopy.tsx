type SecondFoldCopyProps = {
  title: string;
  text: string;
};

export function SecondFoldCopy({ title, text }: SecondFoldCopyProps) {
  return (
    <div className="flex flex-col justify-center gap-3">
      <h1 className="text-h2 text-secondary">{title}</h1>
      <p className="text-paragraph">{text}</p>
    </div>
  );
}
