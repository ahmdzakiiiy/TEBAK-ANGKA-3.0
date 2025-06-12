interface TextProps {
  children: React.ReactNode;
  variant?: 'title' | 'subtitle' | 'body' | 'error';
  className?: string;
}

export const Text = ({
  children,
  variant = 'body',
  className = ''
}: TextProps) => {
  const variantStyles = {
    title: 'text-2xl font-bold text-slate-700',
    subtitle: 'text-lg font-semibold text-slate-700',
    body: 'text-base font-normal text-slate-700',
    error: 'text-base font-medium text-red-600'
  };

  return (
    <div className={`${variantStyles[variant]} ${className}`}>
      {children}
    </div>
  );
};
