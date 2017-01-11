import React from 'react';
import styled, { css } from 'styled-components';
import tinycolor from 'tinycolor2';

const Default = styled.div`
  ${({ theme, hasArrow }) => css`
    position: relative;
    display: inline-block;
    margin: 0 0 ${theme.components.spacing_vertical} 0;
    width: 100%;
    padding: ${theme.components.padding_base_vertical} ${theme.components.padding_base_horizontal};
    text-align: left;
    border-radius: ${theme.components.border_radius};
    border: 0.1rem solid ${tinycolor(theme.colors.grey_light).lighten(20).toString()};
    background: ${tinycolor(theme.colors.grey_light).lighten(30).toString()};
    color: ${tinycolor(theme.colors.grey_light).darken(30).toString()};
    font-size: 1em;
    ${hasArrow && `&:after {
      content: "▲";
      position: absolute;
      top: -1.6rem;
      left: 1.5rem;
      color: ${tinycolor(theme.colors.grey_light).lighten(20).toString()};
    }`}
  `}
`;

const Success = styled(Default)`
  ${({ theme, hasArrow }) => css`
    border: 0.1rem solid ${tinycolor(theme.colors.states.success).lighten(20).toString()};
    background: ${tinycolor(theme.colors.states.success).lighten(30).toString()};
    color: ${tinycolor(theme.colors.states.success).darken(30).toString()};
    ${hasArrow && `&:after {
      color: ${tinycolor(theme.colors.states.success).lighten(20).toString()};
    }`}
  `}
`;

const Danger = styled(Default)`
  ${({ theme, hasArrow }) => css`
    border: 0.1rem solid ${tinycolor(theme.colors.states.danger).lighten(20).toString()};
    background: ${tinycolor(theme.colors.states.danger).lighten(30).toString()};
    color: ${tinycolor(theme.colors.states.danger).darken(30).toString()};
    ${hasArrow && `&:after {
      color: ${tinycolor(theme.colors.states.danger).lighten(20).toString()};
    }`}
  `}
`;

const Warning = styled(Default)`
  ${({ theme, hasArrow }) => css`
    border: 0.1rem solid ${tinycolor(theme.colors.states.warning).lighten(20).toString()};
    background: ${tinycolor(theme.colors.states.warning).lighten(30).toString()};
    color: ${tinycolor(theme.colors.states.warning).darken(30).toString()};
    ${hasArrow && `&:after {
      color: ${tinycolor(theme.colors.states.warning).lighten(20).toString()};
    }`}
  `}
`;

const Info = styled(Default)`
  ${({ theme, hasArrow }) => css`
    border: 0.1rem solid ${tinycolor(theme.colors.states.info).lighten(20).toString()};
    background: ${tinycolor(theme.colors.states.info).lighten(30).toString()};
    color: ${tinycolor(theme.colors.states.info).darken(30).toString()};
    ${hasArrow && `&:after {
      color: ${tinycolor(theme.colors.states.info).lighten(20).toString()};
    }`}
  `}
`;

const Header = styled.div`
  margin-top: 0;
  margin-bottom: 0.25rem;
  font-size: ${props => props.theme.type.font_size_h4};
  color: inherit;
`;

const Description = styled.div`
  margin: 0;
`;

class Alert extends React.Component {
  render() {
    const { status, hasArrow, title, children } = this.props;

    const InnerAlert = (() => {
      switch (status) {
        case 1:
          return Success;
        case 2:
          return Danger;
        case 3:
          return Warning;
        case 4:
          return Info;
        default:
          return Default;
      }
    })();

    return (<InnerAlert hasArrow={hasArrow}>
      <Header>{ title }</Header>
      <Description>
        { children }
      </Description>
    </InnerAlert>);
  }
}

Alert.propTypes = {
  title: React.PropTypes.string,
  status: React.PropTypes.number,
  hasArrow: React.PropTypes.bool,
};
export default Alert;
