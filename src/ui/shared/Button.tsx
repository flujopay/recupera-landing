import clsx from 'clsx';
import * as React from 'react';

export type ButtonVariant =
  | 'primaryFilled'
  | 'primaryOutlined'
  | 'primaryInvertedFilled'
  | 'primaryDarkOutlined'
  | 'secondaryFilled'
  | 'secondaryOutlined'
  | 'ghost'
  | 'link';

export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none';

const variantStyles: Record<ButtonVariant, string> = {
  primaryFilled:
    'bg-brand-primary text-white hover:bg-brand-primary/90 focus:ring-brand-primary',

  primaryOutlined:
    'border border-3 border-brand-primary text-brand-primary hover:bg-brand-primary/10 focus:ring-brand-primary',

  primaryInvertedFilled:
    'bg-white text-brand-primary hover:bg-white/90 focus:ring-white',

  primaryDarkOutlined:
   'border border-3 border-brand-primary-dark text-brand-primary-dark hover:bg-brand-primary-dark/10 focus:ring-brand-primary-dark',

  secondaryFilled:
    'bg-brand-secondary text-white hover:bg-brand-secondary/90 focus:ring-brand-secondary',

  secondaryOutlined:
    'border border-3 border-brand-secondary text-brand-secondary hover:bg-brand-secondary/10 focus:ring-brand-secondary',

  ghost:
    'text-gray-700 hover:bg-gray-100 focus:ring-gray-400',

  link:
    'text-blue-600 underline-offset-4 hover:underline focus:ring-blue-600',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-6 text-sm',
  lg: 'h-13 px-8 text-base',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primaryFilled',
      size = 'md',
      fullWidth,
      loading,
      leftIcon,
      rightIcon,
      children,
      disabled,
      text,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={clsx(
            baseStyles,
            variantStyles[variant],
            sizeStyles[size],
            fullWidth && 'w-full',
            loading && 'cursor-wait',
            className
        )}
        {...props}
      >
        {loading && (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        )}
        {!loading && leftIcon}
        <span className={loading ? 'opacity-0' : 'opacity-100'}>
            {text ?? children}
        </span>
        {!loading && rightIcon}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;