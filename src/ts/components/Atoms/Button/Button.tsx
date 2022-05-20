/* eslint-disable react/require-default-props */
import React from 'react';
import { Link } from 'react-router-dom';

import './Button.css';

export type Props = {
  type?: 'default' | 'primary' | 'error' | 'warning' | 'slight';
  align?: 'left' | 'right' | 'center';
  size?: 'normal' | 'narrow';
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;

  className?: string;
  disabled?: boolean;
};

const Button: React.FC<Props> = ({
  children,
  href,
  onClick,
  disabled,
  className = '',
  align = 'left',
  size = 'normal',
  type = 'default',
}) => {
  let isInternalLink = true;

  if (href) {
    const linkTester = document.createElement('a');
    linkTester.href = href;
    isInternalLink = linkTester.host === location.host;
  }

  const classes = `
    Button
    Button--type-${type}
    Button--size-${size}
    Button--align-${align}
    text-black
    bg-black
    
    ${disabled ? 'Button--disabled' : ''}
    ${className}
  `.trim();

  const globalProps = {
    className: classes,
    ...(disabled && { disabled }),
  };

  if (href && isInternalLink) {
    return (
      <Link {...globalProps} to={href}>
        {children}
      </Link>
    );
  }

  if (href && !isInternalLink) {
    return (
      <a {...globalProps} href={href}>
        {children}
      </a>
    );
  }

  const clickHandler = (event: React.MouseEvent<HTMLElement>) => {
    if (onClick && typeof onClick === 'function') {
      onClick(event);
    }
  };

  return (
    <button {...globalProps} type="button" onClick={clickHandler}>
      {children}
    </button>
  );
};

export default Button;
