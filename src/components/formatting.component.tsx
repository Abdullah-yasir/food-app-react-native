import {XColors} from '../config/constants';
import {withStyles} from '../hoc/with-styles.hoc';
import type {CSSProperties, PropsWithChildren} from 'react';

export const Accented = ({children}) => {
  return withStyles(children, {color: XColors.accent});
};

export const Bold = ({children}) => {
  return withStyles(children, {fontWeight: 'bold'});
};

type HeadingProps = PropsWithChildren<{
  level: 1 | 2 | 3;
  style?: CSSProperties;
}>;

export const Heading = ({level, style = {}, children}: HeadingProps) => {
  const levels = {
    1: {fontSize: 24, fontWeight: '900', marginVertical: 12},
    2: {fontSize: 20, fontWeight: '700', marginVertical: 8},
    3: {fontSize: 16, fontWeight: '500', marginVertical: 4},
  };
  return withStyles(children as JSX.Element, {
    color: 'black',
    ...levels[level],
    ...style,
  });
};
