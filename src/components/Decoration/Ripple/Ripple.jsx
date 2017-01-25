import React from 'react';
import ReactDOM from 'react-dom';
import styled, { css, keyframes } from 'styled-components';

const InnerRipple = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
`;

const rippleAnimation = keyframes`
  0% {
    opacity: 0.1;
    transform: scale(0);
  }
  100% {
    opacity: 0;
    transform: scale(2);
  }
`;

const RippleSingle = styled.span`
  ${({ theme, top, left, height, width }) => css`
    transform-origin: center;
    transform: scale(0);
    border-radius: 100%;
    position: absolute;
    opacity: 0.1;
    background-color: #000;
    animation: ${rippleAnimation} 0.8s normal forwards ease-in-out;
    top: ${top};
    left: ${left};
    height: ${height};
    width: ${width};
  `}
`;

class Ripple extends React.Component {

  constructor(props) {
    super(props);
    this.state = { ripples: [] };
  }

  removeRipple(thiskey) {
    const rips = this.state.ripples;
    this.setState({ ripples: rips.filter(el => el.key.toString() !== thiskey.toString()) });
  }

  handleClick(e) {
    const ripple = ReactDOM.findDOMNode(this);
    const pos = ripple.getBoundingClientRect();
    const width = pos.width;
    const height = pos.height;
    const x = e.pageX - pos.left - (width / 2);
    // const y = e.pageY - pos.top - (height / 2);
    const y = -(width - height) / 2;
    const key = Math.floor(Date.now());
    const rippler = React.cloneElement(<RippleSingle />,
      {
        top: `${y}px`,
        left: `${x}px`,
        height: `${width}px`,
        width: `${width}px`,
        key,
      },
    );
    this.setState({ ripples: this.state.ripples.concat([rippler]), ripple: rippler });
    setTimeout(() => this.removeRipple(key), 1000);
  }

  render() {
    const ripples = this.state.ripples;
    return (
      <InnerRipple onMouseDown={e => this.handleClick(e)}>
        { ripples && ripples }
      </InnerRipple>
    );
  }
}

export default Ripple;
