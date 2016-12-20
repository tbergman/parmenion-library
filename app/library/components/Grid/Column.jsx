/**
 * Column component from hedron grid, with added flexbox fallback.
 * https://github.com/JSBros/hedron/blob/master/src/components/Column.js
 */

import React from 'react';
import styled from 'styled-components';
import styles from '../../theme/index.js';
import Row from './Row.jsx';
import { divvy, media, passOn } from '../../utils';

type Props = {
  children?: Array<React.Element<>>,
  className?: string,
  tagName?: string,
  debug?: boolean,
  divisions?: number,
  fluid?: boolean,
  xs?: number,
  sm?: number,
  md?: number,
  lg?: number,
  xsShift?: number,
  smShift?: number,
  mdShift?: number,
  lgShift?: number
}

function ColumnContainer(props: Props) {
  const { children, tagName, debug, divisions, fluid, xs, sm, md, lg,
    xsShift, smShift, mdShift, lgShift,
    ...rest } = props;
  const newChildren = passOn(children, [Row], (child) => {
    return {
      debug: typeof child.props.debug === 'undefined'
        ? debug
        : child.props.debug,
    };
  });
  return React.createElement(tagName || 'div', rest, newChildren);
}

ColumnContainer.defaultProps = {
  divisions: 12,
};

const Column = styled(ColumnContainer)`
  display: ${(window.document.documentMode < 10) ? "table-cell" : "flex"};
  vertical-align: top;
  ${props => props.debug ? `background-color: rgba(50, 50, 255, .1);
  border: 1px solid #fff;` : ''}
  box-sizing: border-box;
  ${props =>
    props.fluid ? 'padding: 0;' : `padding: 0 ${parseInt(styles.components.spacing_horizontal,10)/2}px;`
  }
  width: 100%;
  ${props =>
    props.xs
      ? `width: ${divvy(props.divisions, props.xs)}%;`
      : null
  }
  ${props =>
    props.xsShift
      ? `margin-left: ${divvy(props.divisions, props.xsShift)}%;`
      : null
  }
  ${media.sm`
    ${props =>
      props.sm
        ? `width: ${divvy(props.divisions, props.sm)}%;`
        : null
    }
    ${props => props.smShift
        ? `margin-left: ${divvy(props.divisions, props.smShift)}%;`
        : null
    }
  `}
  ${media.md`
    ${props =>
      props.md
        ? `width: ${divvy(props.divisions, props.md)}%;`
        : null
    }
    ${props =>
      props.mdShift
        ? `margin-left: ${divvy(props.divisions, props.mdShift)}%;`
        : null
    }
  `}
  ${media.lg`
    ${props =>
      props.lg
        ? `width: ${divvy(props.divisions, props.lg)}%;`
        : null
    }
    ${props =>
      props.lgShift
        ? `margin-left: ${divvy(props.divisions, props.lgShift)}%;`
        : null
    }
  `}
`;

export default Column;