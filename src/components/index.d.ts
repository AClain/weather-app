import { CSSProperties, PropsWithChildren } from 'react';

export type DefaultProps = {
  className?: string;
  styles?: CSSProperties;
  as?: keyof JSX.IntrinsicElements;
};

export interface DefaultPropsWithChildren extends PropsWithChildren {
  className?: string;
  styles?: CSSProperties;
  as?: keyof JSX.IntrinsicElements;
}
