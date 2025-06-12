interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit';
  className?: string;
}

export const Button = ({ 
  children, 
  onClick, 
  variant = 'primary',
  type = 'button',
  className = ''
}: ButtonProps) => {
  const baseStyle = 'p-2 rounded-lg shadow-md font-semibold';
  const variantStyles = {
    primary: 'bg-sky-400 text-slate-50 hover:bg-sky-300',
    secondary: 'bg-rose-500 text-slate-50 hover:bg-rose-400'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
