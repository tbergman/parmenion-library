import React from 'react';
import AccordionPanel from './AccordionPanel';

/**
 * @example ./README.md#Accordion
 */
class Accordion extends React.Component {

  constructor(props) {
    super(props);
    this.state = { openPanelIndex: 1 };
  }

  handleClick(index) {
    this.setState({ openPanelIndex: index });
  }

  render() {
    const { children } = this.props;

    const panels = React.Children.map(children, (panel, index) => (
      <AccordionPanel
        title={panel.props.title}
        isOpen={index === this.state.openPanelIndex}
        onClick={() => this.handleClick(index)}
        key={index} // eslint-disable-line
        // TODO use proper id for key
      >
        {panel.props.children}
      </AccordionPanel>
      ));

    return <div>{panels}</div>;
  }
}

Accordion.propTypes = {
  children: React.PropTypes.node.isRequired,
};

Accordion.defaultProps = {};

export default Accordion;
