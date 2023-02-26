import React, {CSSProperties} from 'react';

export const withStyles = (children: JSX.Element, styles: CSSProperties) => {
  return React.Children.map(children, child => {
    return React.cloneElement(child, {
      style: styles,
    });
  });
};
