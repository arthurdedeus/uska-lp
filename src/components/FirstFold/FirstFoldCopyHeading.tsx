type FirstFoldCopyHeading = {
  text: string;
};

export function FirstFoldCopyHeading({ text }: FirstFoldCopyHeading) {
  return <h1 className="font-poppins text-h1 text-white">{text}</h1>;
}
