import React from 'react';
import styled from 'styled-components';

function reduceValue(value, reduction) {
  return `${(parseFloat(value, 10) / reduction).toFixed(2)}rem`;
}

const ContentStyle = styled.div`
  display: block;

  * {
    margin-top: 0;
  }

  p {
    font-size: 1em;
    margin-top: 0;
    margin-bottom: ${props => props.theme.components.spacing_vertical};
  }

  h1 {
    font-size: ${props => props.theme.type.font_size_h1};
    font-family: ${props => props.theme.type.font_heading};
    margin-bottom: ${props => reduceValue(props.theme.components.spacing_vertical, 1)};
  }

  h2 {
    font-size: ${props => props.theme.type.font_size_h2};
    font-family: ${props => props.theme.type.font_heading};
    margin-bottom: ${props => reduceValue(props.theme.components.spacing_vertical, 1.2)};
  }

  h3 {
    font-size: ${props => props.theme.type.font_size_h3};
    font-family: ${props => props.theme.type.font_heading};
    margin-bottom: ${props => reduceValue(props.theme.components.spacing_vertical, 1.4)};
  }

  h4 {
    font-size: ${props => props.theme.type.font_size_h4};
    font-family: ${props => props.theme.type.font_heading};
    margin-bottom: ${props => reduceValue(props.theme.components.spacing_vertical, 1.6)};
  }

  h5 {
    font-size: ${props => props.theme.type.font_size_h5};
    font-family: ${props => props.theme.type.font_heading};
    margin-bottom: ${props => reduceValue(props.theme.components.spacing_vertical, 1.8)};
  }

  h6 {
    font-size: ${props => props.theme.type.font_size_h6};
    font-family: ${props => props.theme.type.font_heading};
    margin-bottom: ${props => reduceValue(props.theme.components.spacing_vertical, 2)};
  }

  *:last-child {
    margin-bottom: 0;
  }

`;

export const Content = props => <ContentStyle {...props} />;

Content.propTypes = {
  children: React.PropTypes.node,
};
