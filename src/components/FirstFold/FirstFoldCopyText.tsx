type FirstFoldCopyText = {
  text: string;
};

export function FirstFoldCopyText({ text }: FirstFoldCopyText) {
  return <p className="font-poppins text-paragraph text-white mt-8">{text}</p>;
}
