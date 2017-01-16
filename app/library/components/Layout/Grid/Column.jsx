/**
 * Column component from hedron grid, with added:
 * - IE9 float fallback
 * - Flex options
 * - Spacing options
 * https://github.com/JSBros/hedron/blob/master/src/components/Column.js
 */

import React from 'react';
import styled from 'styled-components';
import Row from './Row';
import { divvy, media, passOn } from './utils';

type Props = {
  children?: Array<React.Element<>>,
  className?: string,
  tagName?: string,
  debug?: boolean,
  divisions?: number,
  flex?: boolean,
  fill?: number,
  spacing?: number,
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
  const { children, tagName, debug, ...rest } = props;
  const newChildren = passOn(children, [Row], child => ({
    debug: typeof child.props.debug === 'undefined'
        ? debug
        : child.props.debug,
  }));
  return React.createElement(tagName || 'div', rest, newChildren);
}

ColumnContainer.defaultProps = {
  divisions: 12,
};

const Column = styled(ColumnContainer)`
  display: ${(window.document.documentMode < 10) ? 'block' : props => props.flex ? 'flex' : 'block'};
  float: ${(window.document.documentMode < 10) ? 'left' : 'none'};
  ${props => props.debug ? `background-color: rgba(50, 50, 255, .1);
  border: 0.1rem solid #fff;` : ''}
  box-sizing: border-box;
  ${props => `padding: 0 ${props.spacing >= 0 ? (props.spacing / 2) : parseInt(props.theme.components.spacing_horizontal, 10) / 2}rem;`}
  ${props =>
    (props.xs || props.sm || props.md || props.lg) ? `
      width: 100%;
      &:not(:last-child) {
        margin-bottom: ${props.theme.layout.push(1)};
      }
    ` : null
  }
  ${props =>
    props.fill ? 'flex: 1;' : null
  }
  ${props =>
    props.xs
      ? `width: ${divvy(props.divisions, props.xs)}%; margin-bottom: 0;`
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
        ? `width: ${divvy(props.divisions, props.sm)}%; margin-bottom: 0;`
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
        ? `width: ${divvy(props.divisions, props.md)}%; margin-bottom: 0;`
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
        ? `width: ${divvy(props.divisions, props.lg)}%; margin-bottom: 0;`
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
