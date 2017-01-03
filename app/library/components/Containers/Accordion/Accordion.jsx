import React from 'react';
import styled from 'styled-components';
import styles from '../../../theme';
import tc from 'tinycolor2';
import AccordionPanel from "./AccordionPanel2.jsx";

/* ==========================================================================
   React Component
========================================================================== */

class Accordion extends React.Component {

  constructor(props) {
    super(props);
    this.state = {openPanelIndex: 1};
  }

  handleClick(index) {
    this.setState({openPanelIndex: index});
  }

  render() {
    const {children, openPanelIndex} = this.props;

    const panels = children.map((panel, index) => {
      return (
        <AccordionPanel 
          title={panel.props.title} 
          isOpen={index === this.state.openPanelIndex} 
          onClick={() => this.handleClick(index)} 
          key={index}
        >
          {panel.props.children}
        </AccordionPanel>
      );
    });

    return <div>{panels}</div>;
  }
}

Accordion.propTypes = {
  children: React.PropTypes.node.isRequired
};

Accordion.defaultProps = {};

export default Accordion;