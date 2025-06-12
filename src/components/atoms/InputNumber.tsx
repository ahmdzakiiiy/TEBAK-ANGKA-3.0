interface InputNumberProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  className?: string;
}

export const InputNumber = ({
  value,
  onChange,
  min = 1,
  max = 10,
  className = ''
}: InputNumberProps) => {
  return (
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(parseInt(e.target.value))}
      min={min}
      max={max}
      className={`w-20 p-2 text-2xl font-bold text-center border rounded-md shadow-md cursor-pointer focus:outline-none focus:ring focus:ring-sky-400 text-slate-700 border-slate-200 ${className}`}
    />
  );
};
