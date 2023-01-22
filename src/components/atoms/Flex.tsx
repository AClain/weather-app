import classNames from 'classnames';
import { DefaultPropsWithChildren } from 'components';
import { FC } from 'react';

interface Props extends DefaultPropsWithChildren {
  direction?: 'column' | 'row';
  align?: 'start' | 'center' | 'end';
  justify?: 'start' | 'around' | 'center' | 'between' | 'end' | 'evenly';
  gap?: number;
  [x: string]: any;
}

const Flex: FC<Props> = ({
  direction = 'row',
  align = 'start',
  justify = 'center',
  gap = 5,
  className = null,
  styles = {},
  as = 'div',
  children = undefined,
  ...rest
}) => {
  const RenderedComponent = as;

  const compiledClassNames = classNames(
    'flex',
    `flex_direction_${direction}`,
    `flex_align_${align}`,
    `flex_justify_${justify}`,
    className,
  );

  const compiledStyles = {
    gap: `${gap}px`,
    ...styles,
  };

  return (
    <RenderedComponent {...rest} className={compiledClassNames} style={compiledStyles}>
      {children}
    </RenderedComponent>
  );
};

export default Flex;
