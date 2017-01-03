import React from 'react';
import ReactDom from 'react-dom';
import {StyleSheet, css} from 'aphrodite';

/* ==========================================================================
   Styles
========================================================================== */

const getStyles = function(state, props) {

  return StyleSheet.create({
    container: {
      marginBottom: '0',
      backgroundColor: 'white',
      border: '1px solid #dddddd',
      borderRadius: '3px',
      ':not(:first-child)': {
        marginTop: '-1px'
      }
    },
    heading: {
      display: 'block',
      position: 'relative',
      padding: '10px',
      paddingRight: '50px',
      borderBottom: '0',
      borderTopRightRadius: '4px',
      borderTopLeftRadius: '4px',
      color: '#333333',
      backgroundColor: props.isOpen ? '#eeeeee' : '#f5f5f5',
      borderColor: '#dddddd',
      textDecoration: 'none',
      ':hover': {
        backgroundColor: props.isOpen ? '#e5e5e5' : '#f1f1f1'
      }
    },
    title: {
      fontSize: '28px',
      margin: '0',
      ':before': { 
        content: "':before'",
        backgroundColor: 'yellow',
        color: 'red',
        fontWeight: 'bold'
      }
    },
    body: {
      display: 'block',
      height: state.height,
      transition: 'height 300ms ease-out',
      overflow: 'hidden'
    },
    body_inner: {
      padding: '10px;',
      textAlign: 'left'
    }
  });

}

/* ==========================================================================
   React Component
========================================================================== */

class AccordionPanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {height: 0};
  }

  componentDidMount() {
    this.toggleOpen();
  }

  componentDidUpdate() {
    this.toggleOpen();
  }

  toggleOpen() {
    setTimeout(() => {
      if (this.props.isOpen && this.state.height === 0) {
        this.setState({height: ReactDom.findDOMNode(this._body).scrollHeight});
      } else if (!this.props.isOpen && this.state.height > 0) {
        this.setState({height: 0});
      }
    }, 0);
  }

  render() {
    const {title, children, isOpen, onClick} = this.props;
    let styles = getStyles(this.state, this.props);
    return (
      <div className={css(styles.container)} onClick={onClick}>
        <a className={css(styles.heading)} href="#">
          <h4 className={css(styles.title)}>{title}</h4>
        </a>
        <div className={css(styles.body)} ref={(ref) => { this._body = ref; }}>
          <div className={css(styles.body_inner)}>
            {children}
          </div>
        </div>
      </div>
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