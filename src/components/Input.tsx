type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ ...props }: InputProps) {
  return (
    <input
      className="bg-white text-black border-2 border-light-grey placeholder-light-grey rounded-3xl px-5 py-2 min-w-[432px] focus:outline-none"
      {...props}
    />
  );
}
