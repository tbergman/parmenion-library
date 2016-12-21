import React from 'react';
import styled from 'styled-components';
import styles from '../../../theme';
import tc from 'tinycolor2';


/* ==========================================================================
   Styles
========================================================================== */

const Container = styled.div`
	margin-bottom: 0;
	background-color: white;
	border: 1px solid ${styles.components.border_color};
	border-radius: ${styles.components.border_radius};
  & + & {
    margin-top: -0.1rem;
  }
`;

const Heading = styled.a`
	display: block;
  position: relative;
  padding: ${styles.components.padding_base_vertical} ${styles.components.padding_base_horizontal};
  padding-right: 5rem;
  border-bottom: 0;
  border-top-right-radius: ${styles.components.border_radius};
  border-top-left-radius: ${styles.components.border_radius};
  color: ${styles.type.text_color};
  background-color: ${props => props.isOpen ? tc(styles.colors.gray_lightest).darken(5).toString() : styles.colors.gray_lightest};
  border-color: ${styles.components.border_color};
  text-decoration: none!important;
  &:hover {
    background-color: ${props => props.isOpen ? tc(styles.colors.gray_lightest).darken(7).toString() : tc(styles.colors.gray_lightest).darken(3).toString()};
  }
`;

const Title = styled.h4`
	font-size: ${styles.type.font_size_h4};
	margin: 0;
`;

const Body = styled.div`
  display: block;
	height: ${props => props.isOpen ? "20rem" : "0rem"};
	transition: height 300ms ease-out;
	overflow: hidden;
`;

const BodyInner = styled.div`
	padding: ${styles.components.padding_base_vertical} ${styles.components.padding_base_horizontal};
`;

/* ==========================================================================
   React Component
========================================================================== */

class AccordionPanel extends React.Component {
  render() {
    const {title, children, isOpen, onClick} = this.props;
    return (
    	<Container onClick={onClick}>
    		<Heading href="#" isOpen={isOpen}>
    			<Title>{title}</Title>
  			</Heading>
  			<Body isOpen={isOpen}>
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
  isOpen: React.PropTypes.bool
};

AccordionPanel.defaultProps = {
	isOpen: false
};

export default AccordionPanel;