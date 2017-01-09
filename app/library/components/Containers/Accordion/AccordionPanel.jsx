import React from 'react';
import ReactDom from 'react-dom';
import tc from 'tinycolor2';
import styled, { css } from 'styled-components';


/* ==========================================================================
   Styles
========================================================================== */

const Container = styled.div`
  margin-bottom: 0;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.components.border_color};
  border-radius: ${({ theme }) => theme.components.border_radius};
  & + & {
    margin-top: -0.1rem;
  }
`;

const Title = styled.h4`
  font-size: ${({ theme }) => theme.type.font_size_h4};
  margin: 0;
`;

const Heading = styled.div`${({ theme, isOpen }) => css`
  display: block;
  position: relative;
  padding: ${theme.components.padding_base_vertical} ${theme.components.padding_base_horizontal};
  padding-right: 5rem;
  border-bottom: 0;
  border-top-right-radius: ${theme.components.border_radius};
  border-top-left-radius: ${theme.components.border_radius};
  color: ${theme.type.text_color};
  background-color: ${isOpen ? tc(theme.colors.gray_lightest).darken(5).toString() : theme.colors.gray_lightest};
  border-color: ${theme.components.border_color};
  text-decoration: none!important;
  &:hover {
    background-color: ${isOpen ? tc(theme.colors.gray_lightest).darken(7).toString() : tc(theme.colors.gray_lightest).darken(3).toString()};
    /* > $//{Title} {
      color: red;
    }*/
  }
`}`;

const Body = styled.div`
  display: block;
  height: ${props => `${props.height}px`};
  transition: height 300ms ease-out;
  overflow: hidden;
`;

const BodyInner = styled.div`${({ theme }) => css`
  padding: ${theme.components.padding_base_vertical} ${theme.components.padding_base_horizontal};
`}`;

/* ==========================================================================
   React Component
========================================================================== */

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
      <Container onClick={onClick}>
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
      </Container>
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
