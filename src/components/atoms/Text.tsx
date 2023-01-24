import classNames from 'classnames';
import { FC } from 'react';
import { DefaultPropsWithChildren } from 'components';

interface Props extends DefaultPropsWithChildren {
  size?: number;
  italic?: boolean;
  bold?: boolean;
}

const Text: FC<Props> = ({
  size = 16,
  italic = false,
  bold = false,
  className = null,
  styles = {},
  as = 'p',
  children,
}) => {
  const RenderedComponent = as;

  const compiledClassNames = classNames({ text_italic: italic, text_bold: bold, className });

  const compiledStyles = {
    fontSize: `${size}px`,
    ...styles,
  };

  return (
    <RenderedComponent className={compiledClassNames} style={compiledStyles}>
      {children}
    </RenderedComponent>
  );
};

export default Text;
