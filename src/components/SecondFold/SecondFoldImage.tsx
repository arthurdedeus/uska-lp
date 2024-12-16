type SecondFoldImageProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

export function SecondFoldImage({ src, alt, ...props }: SecondFoldImageProps) {
  return <img src={src} alt={alt} className="w-96" {...props} />;
}
