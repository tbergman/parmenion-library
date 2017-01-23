import React from 'react';
import styled, { css } from 'styled-components';
import { Stacked } from '../../Layout';
import { H3 } from '../../Type';
import { Menu, MenuItem } from '../../Navigation';

const CardStyle = styled.div`
  ${({ theme, isActive }) => css`
    background: white;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
    padding: ${theme.components.spacing_vertical} ${theme.components.padding_base_horizontal};
  `}
`;

const OutsetContent = styled.div`
  ${({ theme, isActive }) => css`
    margin: 0 -${theme.components.padding_base_horizontal} -${theme.components.spacing_vertical} -${theme.components.padding_base_horizontal};
  `}
`;

export const Card = props => (
  <CardStyle {...props}>
    <Stacked>
      {props.heading && [
        <Card.Heading key={0}>{props.heading}</Card.Heading>,
      ]}

      {props.children}
    </Stacked>
  </CardStyle>
);

Card.Heading = H3;

Card.ActionList = props => (
  <OutsetContent>
    <Menu {...props} />
  </OutsetContent>
);

Card.ActionList.Item = props => (
  <MenuItem {...props} hasArrow={!!props.href || !!props.to}>
    {props.label}
  </MenuItem>
);
