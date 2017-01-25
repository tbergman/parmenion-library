import React from 'react';
import styled, { css } from 'styled-components';
import tinycolor from 'tinycolor2';

const Default = styled.div`
  ${({ theme, hasArrow, isSmall }) => css`
    position: relative;
    display: table;
    width: 100%;
    padding: ${isSmall ?
      `${theme.components.padding_small_vertical} ${theme.components.padding_small_horizontal}` :
      `${theme.components.padding_base_horizontal}`
    };
    text-align: left;
    border-radius: ${theme.components.border_radius};
    border: 0.1rem solid ${theme.colors.gray_lighter};
    background: ${theme.colors.gray_lighter};
    color: ${theme.type.text_color};
    font-size: 1em;
    ${hasArrow && `&:after {
      content: "▲";
      position: absolute;
      top: -1.7rem;
      left: 1.5rem;
      color: ${theme.colors.gray_lighter};
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
    border: 0.1rem solid ${tinycolor(theme.colors.states.danger).lighten(30).toString()};
    background: ${tinycolor(theme.colors.states.danger).lighten(40).toString()};
    color: ${tinycolor(theme.colors.states.danger).darken(20).toString()};
    ${hasArrow && `&:after {
      color: ${tinycolor(theme.colors.states.danger).lighten(30).toString()};
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
  margin-bottom: 1rem;
  font-size: ${props => props.theme.type.font_size_h4};
  color: inherit;
`;

const Description = styled.div`
  margin: 0;
`;

const LeftColumn = styled.div`
  display: table-cell;
  width: 0.1rem;
  text-align: right;
  vertical-align: top;
`;

const RightColumn = styled.div`
  display: table-cell;
  width: auto;
  text-align: left;
  vertical-align: top;
`;

const AlertIcon = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.components.padding_base_horizontal} 0 0;
  `}
`;

const Alert = ({ children, status, hasArrow, title, icon, isSmall }) => {
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

  if (icon) {
    return (
      <InnerAlert hasArrow={hasArrow} isSmall={isSmall}>
        <LeftColumn>
          <AlertIcon>{ icon }</AlertIcon>
        </LeftColumn>
        <RightColumn>
          { title && <Header>{ title }</Header> }
          <Description>
            { children }
          </Description>
        </RightColumn>
      </InnerAlert>
    );
  }

  return (
    <InnerAlert hasArrow={hasArrow} isSmall={isSmall}>
      { title && <Header>{ title }</Header> }
      <Description>
        { children }
      </Description>
    </InnerAlert>
  );
};

Alert.propTypes = {
  title: React.PropTypes.string,
  icon: React.PropTypes.node,
  status: React.PropTypes.number,
  hasArrow: React.PropTypes.bool,
  isSmall: React.PropTypes.bool,
  children: React.PropTypes.node.isRequired,
};

Alert.defaultProps = {
  title: null,
  icon: null,
  status: null,
  hasArrow: false,
  isSmall: false,
};

export default Alert;
