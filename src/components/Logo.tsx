type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <a href="#">
      <img src="uska-light.svg" alt="Uska Logo" className={className} />
    </a>
  );
}
