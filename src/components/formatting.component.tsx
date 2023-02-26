import {XColors} from '../config/constants';
import {withStyles} from '../hoc/with-styles.hoc';
import type {PropsWithChildren} from 'react';

export const Accented = ({children}) => {
  return withStyles(children, {color: XColors.accent});
};

export const Bold = ({children}) => {
  return withStyles(children, {fontWeight: 'bold'});
};

type HeadingProps = PropsWithChildren<{
  level: 1 | 2 | 3;
}>;

export const Heading = ({level, children}: HeadingProps) => {
  const levels = {
    1: {fontSize: 24, fontWeight: '900', marginVertical: 12},
    2: {fontSize: 20, fontWeight: '700', marginVertical: 8},
    3: {fontSize: 16, fontWeight: '500', marginVertical: 4},
  };
  return withStyles(children as JSX.Element, {
    ...levels[level],
    color: 'black',
  });
};
