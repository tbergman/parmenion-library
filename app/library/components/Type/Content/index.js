import styled from 'styled-components';

export const Content = styled.div`
  display: block;

  * {
    margin-top: 0;
  }

  p {
    line-height: ${props => props.theme.layout.push(2)};
    margin-bottom: ${props => props.theme.layout.push(1)};
  }

  h1, h2 {
    line-height: ${props => props.theme.layout.push(4)};
    margin-bottom: ${props => props.theme.layout.push(1)};
  }

  h3, h4, h5, h6 {
    line-height: ${props => props.theme.layout.push(2)};
    margin-bottom: ${props => props.theme.layout.push(1)};
  }

  *:last-child {
    margin-bottom: 0;
  }

  h1 {
    font-size: ${props => props.theme.type.font_size_h1};
  }

  h2 {
    font-size: ${props => props.theme.type.font_size_h2};
  }

  h3 {
    font-size: ${props => props.theme.type.font_size_h3};
  }

  h4 {
    font-size: ${props => props.theme.type.font_size_h4};
  }

  h5 {
    font-size: ${props => props.theme.type.font_size_h5};
  }

  h6 {
    font-size: ${props => props.theme.type.font_size_h6};
  }
`;
