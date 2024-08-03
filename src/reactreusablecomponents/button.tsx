import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import '../styles/buttonstyles.css';

type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  isDisabled?: boolean;
  icon?: ReactNode;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  isLoading = false,
  isDisabled = false,
  icon,
  children,
  ...props
}) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size} ${isLoading ? 'btn-loading' : ''}`}
      disabled={isDisabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="spinner" />
      ) : (
        <>
          {icon && <span className="btn-icon">{icon}</span>}
          {children}
        </>
      )}
    </button>
  );
};

export default Button;
