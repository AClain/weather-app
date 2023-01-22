import classNames from 'classnames';
import { FC } from 'react';
import { DefaultPropsWithChildren } from 'components';

interface Props extends DefaultPropsWithChildren {
  size?: 'sm' | 'md' | 'lg';
}

const Container: FC<Props> = ({
  size = 'md',
  className = null,
  styles = {},
  as = 'div',
  children = undefined,
}) => {
  const RenderedComponent = as;

  const compiledClassNames = classNames('container', `container_${size}`, className);

  const compiledStyles = {
    ...styles,
  };

  return (
    <RenderedComponent className={compiledClassNames} style={compiledStyles}>
      {children}
    </RenderedComponent>
  );
};

export default Container;
