import React from 'react';
import ReactDom from 'react-dom';
import tc from 'tinycolor2';
import styled, { css } from 'styled-components';

const AccordionPanelInner = styled.div`
  ${({ theme }) => css`
    margin-bottom: 0;
    background-color: white;
    border: 1px solid ${theme.components.border_color};
    border-radius: ${theme.components.border_radius};
    overflow: hidden;
    & + & {
      margin-top: -0.1rem;
    }
  `}
`;

const Title = styled.h4`
  font-size: ${props => props.theme.type.font_size_h4};
  margin: 0;
`;

const Heading = styled.div`
  ${({ theme, isOpen }) => css`
    display: block;
    position: relative;
    padding: ${theme.components.padding_base_vertical} ${theme.components.padding_base_horizontal};
    padding-right: 5rem;
    border-bottom: 0;
    color: ${theme.type.text_color};
    background-color: ${isOpen ? tc(theme.colors.gray_lightest).darken(5).toString() : theme.colors.gray_lightest};
    border-color: ${theme.components.border_color};
    text-decoration: none!important;
    &:hover {
      background-color: ${isOpen ? tc(theme.colors.gray_lightest).darken(7).toString() : tc(theme.colors.gray_lightest).darken(3).toString()};
      cursor: pointer;
    }
  `}
`;

const Body = styled.div`
  display: block;
  height: ${props => `${props.height}px`};
  transition: height 300ms ease-out;
  overflow: hidden;
`;

const BodyInner = styled.div`
  ${({ theme }) => css`
    padding: ${theme.components.padding_base_vertical} ${theme.components.padding_base_horizontal};
  `}
`;

/**
 * @example ./README.md#AccordionPanel
 */
class AccordionPanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = { height: 0 };
  }

  componentDidMount() {
    this.toggleOpen();
  }

  componentDidUpdate() {
    this.toggleOpen();
  }

  toggleOpen() {
    if (this.props.isOpen && this.state.height === 0) {
      this.setState({ height: ReactDom.findDOMNode(this.body).scrollHeight });
    } else if (!this.props.isOpen && this.state.height > 0) {
      this.setState({ height: 0 });
    }
  }

  render() {
    const { title, children, isOpen, onClick } = this.props;
    return (
      <AccordionPanelInner onClick={onClick}>
        <Heading href="#" isOpen={isOpen}>
          <Title>{title}</Title>
        </Heading>
        <Body
          height={this.state.height} ref={(ref) => {
            this.body = ref;
          }}
        >
          <BodyInner>
            {children}
          </BodyInner>
        </Body>
      </AccordionPanelInner>
    );
  }

}

AccordionPanel.propTypes = {
  title: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired,
  onClick: React.PropTypes.func,
  isOpen: React.PropTypes.bool,
};

AccordionPanel.defaultProps = {
  isOpen: false,
};

export default AccordionPanel;
