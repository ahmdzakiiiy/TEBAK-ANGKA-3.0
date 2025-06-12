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
  className = "",
}: InputNumberProps) => {
  const increment = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  const decrement = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <button
        type="button"
        onClick={decrement}
        className="w-10 h-10 text-xl font-bold bg-gray-200 rounded-l-md hover:bg-gray-300 focus:outline-none focus:ring focus:ring-sky-400 md:hidden"
      >
        -
      </button>
      <input
        type="number"
        value={value}
        onChange={(e) => {
          const newValue = parseInt(e.target.value) || min;
          onChange(newValue < min ? min : newValue > max ? max : newValue);
        }}
        min={min}
        max={max}
        className={`w-16 p-2 text-2xl font-bold text-center border shadow-md cursor-pointer focus:outline-none focus:ring focus:ring-sky-400 text-slate-700 border-slate-200 md:w-20 md:rounded-md ${className}`}
      />
      <button
        type="button"
        onClick={increment}
        className="w-10 h-10 text-xl font-bold bg-gray-200 rounded-r-md hover:bg-gray-300 focus:outline-none focus:ring focus:ring-sky-400 md:hidden"
      >
        +
      </button>
    </div>
  );
};
