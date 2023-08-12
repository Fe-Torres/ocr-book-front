type InputProps = {
  name: string;
  onChange: (value: string) => void;
};

export const Input = ({ name, onChange }: InputProps) => {
  return (
    <>
      <input
        className="max-w-xs p-2 font-semibold text-black text-lg bg-slate-200"
        onChange={(event) => onChange(event.target.value)}
        name={name}
        placeholder={name}
      />
    </>
  );
};
