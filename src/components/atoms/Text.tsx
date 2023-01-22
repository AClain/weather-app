import classNames from 'classnames';
import { FC } from 'react';
import { DefaultPropsWithChildren } from 'components';

interface Props extends DefaultPropsWithChildren {
  italic?: boolean;
  bold?: boolean;
}

const Text: FC<Props> = ({ italic = false, bold = false, className = null, styles = {}, children }) => {
  const compiledClassNames = classNames({ text_italic: italic, text_bold: bold, className });

  const compiledStyles = {
    ...styles,
  };

  return (
    <p className={compiledClassNames} style={compiledStyles}>
      {children}
    </p>
  );
};

export default Text;
