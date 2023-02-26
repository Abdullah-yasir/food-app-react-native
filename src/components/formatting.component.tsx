import {XColors} from '../config/constants';
import {withStyles} from '../hoc/with-styles.hoc';

export const Accented = ({children}) => {
  return withStyles(children, {color: XColors.accent});
};

export const Bold = ({children}) => {
  return withStyles(children, {fontWeight: 'bold'});
};
