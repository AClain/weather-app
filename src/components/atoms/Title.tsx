import classNames from 'classnames';
import { FC } from 'react';
import { DefaultPropsWithChildren } from 'components';

interface Props extends DefaultPropsWithChildren {
  order?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Title: FC<Props> = ({ order = 'h1', className = null, styles = {}, children }) => {
  const TitleTag = `${order}` as keyof JSX.IntrinsicElements;
  const compiledClassNames = classNames(`title_${order}`, className);

  const compiledStyles = {
    ...styles,
  };

  return (
    <TitleTag className={compiledClassNames} style={compiledStyles}>
      {children}
    </TitleTag>
  );
};

export default Title;
