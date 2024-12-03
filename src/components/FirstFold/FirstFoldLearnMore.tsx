type FirstFoldLearnMoreProps = {
  href: string;
};

export function FirstFoldLearnMore({ href }: FirstFoldLearnMoreProps) {
  return (
    <div className="text-white text-poppins text-paragraph-alt1 flex justify-center flex-col items-center">
      <a href={href} className="flex justify-center flex-col">
        Saber mais
      </a>
      <a href={href} className="flex justify-center flex-col ">
        <img src="expand-more.svg" className="h-6 w-6" />
      </a>
    </div>
  );
}
