/**
 * Row component from hedron grid, with added:
 * - IE9 float fallback
 * - Flex options
 * - Spacing options
 * https://github.com/JSBros/hedron/blob/master/src/components/Row.js
 */

import React from 'react';
import styled from 'styled-components';
import Column from './Column';
import { passOn } from './utils';

type Props = {
  children?: Array<React.Element<>>,
  className?: string,
  debug?: boolean,
  tagName?: string,
  divisions?: number,
  alignContent?: string,
  alignItems?: string,
  alignSelf?: string,
  justifyContent?: string,
  order?: string,
  spacing?: number
}

function RowContainer(props: Props) {
  const { children, tagName, debug, divisions, spacing, ...rest } = props;
  const newChildren = passOn(children, [Column], child => ({
    debug: typeof child.props.debug === 'undefined'
        ? debug
        : child.props.debug,
    divisions,
    spacing,
  }));
  return React.createElement(tagName || 'section', rest, newChildren);
}

RowContainer.defaultProps = {
  divisions: 12,
};

const Row = styled(RowContainer)`
  display: ${(window.document.documentMode < 10) ? 'block' : 'flex'};
  margin: 0 -${props => props.spacing >= 0 ? props.spacing / 2 : parseInt(props.theme.components.spacing_horizontal, 10) / 2}rem;
  width: auto;
  flex-direction: row;
  flex-wrap: wrap;
  ${props => props.alignContent
    ? `align-content: ${props.alignContent};`
    : null
  }
  ${props => props.alignItems
    ? `align-items: ${props.alignItems};`
    : null
  }
  ${props => props.alignSelf
    ? `align-self: ${props.alignSelf};`
    : null
  }
  ${props => props.justifyContent
    ? `justify-content: ${props.justifyContent};`
    : null
  }
  ${props => props.order
    ? `order: ${props.order};`
    : null
  }
`;


export default Row;
