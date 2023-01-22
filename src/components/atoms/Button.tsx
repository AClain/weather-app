import classNames from 'classnames';
import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { DefaultProps } from 'components/index.d';

type Props = ButtonHTMLAttributes<HTMLButtonElement> &
  DefaultProps & {
    label: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    color?: 'primary' | 'info' | 'success' | 'warning' | 'error';
    size?: 'sm' | 'md' | 'lg';
  };

const Button: FC<Props> = ({
  label,
  leftIcon = null,
  rightIcon = null,
  color = 'primary',
  size = 'md',
  type = 'button',
  className = null,
  styles = {},
  ...rest
}) => {
  const compiledClassNames = classNames(`btn`, `btn_${color}`, `btn_${size}`, className);

  const compiledStyles = {
    display: leftIcon || rightIcon ? 'flex' : 'inline-block',
    alignItems: 'center',
    gap: 5,
    ...styles,
  };

  if (leftIcon) {
    return (
      <button {...rest} type={type} className={compiledClassNames} style={compiledStyles}>
        {leftIcon}
        <span>{label}</span>
      </button>
    );
  }

  if (rightIcon) {
    return (
      <button {...rest} type={type} className={compiledClassNames} style={compiledStyles}>
        <span>{label}</span>
        {rightIcon}
      </button>
    );
  }

  return (
    <button {...rest} type={type} className={compiledClassNames} style={compiledStyles}>
      {label}
    </button>
  );
};

export default Button;
