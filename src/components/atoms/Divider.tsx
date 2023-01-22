import classNames from 'classnames';
import { FC } from 'react';
import { DefaultProps } from 'components';

interface Props extends DefaultProps {}

const Divider: FC<Props> = ({ className = null, styles = {} }) => {
  const compiledClassNames = classNames('divider', className);

  const compiledStyles = {
    ...styles,
  };

  return <hr className={compiledClassNames} style={compiledStyles} />;
};

export default Divider;
