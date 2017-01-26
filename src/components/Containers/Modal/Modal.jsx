/* eslint-disable no-unused-expressions */

import React, { PropTypes } from 'react';
import Portal from 'react-portal';
import { Motion, spring } from 'react-motion';
import styled, { injectGlobal } from 'styled-components';
import { ContentWithRight, Stacked, Horizontal } from '../../Layout';
import { IconButton } from '../../Form';

injectGlobal`
  body.p-modal-open {
    overflow: hidden;
  }
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1050;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0 ${({ theme }) => theme.components.spacing_horizontal};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalInner = styled.div`
  max-width: 900px;
  flex: 1;
  margin: ${({ theme }) => theme.components.spacing_vertical} auto;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  background-clip: padding-box;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
`;

const Title = styled.div`
  position: relative;
  padding: 2rem 2rem;
  border-bottom: 1px solid transparent;
  background: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.type.font_heading};
  color: white;
  font-size: 1.5em;
`;

const Body = styled.div`
  padding: 20px;
  min-height: 40px;
`;

export class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.openCount = 0;
    this.state = { isClosing: false, isOpen: props.isOpen };

    if (props.isOpen) {
      this.open();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isOpen !== this.props.isOpen) {
      if (nextProps.isOpen) {
        this.openCount += 1; // increment react key for every time the modal opens to force a re-render
        this.setState({ isOpen: true, isClosing: false });
        this.open();
      } else {
        this.setState({ isClosing: true });
        this.close();
      }
    }
  }

  onAnimationRest = () => {
    if (this.state.isClosing) {
      this.setState({ isOpen: false, isClosing: false });
    }
  }

  open = () => {
    document.body.className += ' p-modal-open';
  }

  close = () => {
    document.body.className = document.body.className.replace(' p-modal-open', '');
  }

  render() {
    return (
      <Portal
        isOpened={this.state.isOpen}
      >
        <ModalWithBackdrop
          key={this.openCount}
          isClosing={this.state.isClosing}
          onAnimationRest={this.onAnimationRest}
          {...this.props}
        >
          {this.props.children}
        </ModalWithBackdrop>
      </Portal>
    );
  }
}

Modal.propTypes = {
  isOpen: PropTypes.bool,

  /** Fired when user presses on the close button in the corner of the modal */
  onClose: PropTypes.func,

  title: PropTypes.string,

  /** Primary button which will be shown in the bottom right of the modal */
  primaryButton: PropTypes.node,

  /** `SpacedNode[]` Array of other buttons which will be shown in the bottom left. */
  buttons: PropTypes.arrayOf(PropTypes.node),

  /** Inner contents of the modal */
  children: PropTypes.node,
};

class ModalWithBackdrop extends React.Component { // eslint-disable-line
  render() {
    const { isClosing, ...props } = this.props;

    return (
      <Motion
        defaultStyle={{ scale: 0.9, y: -100, opacity: 0 }}
        style={{
          scale: spring(isClosing ? 0.9 : 1, { stiffness: 150, damping: 17 }),
          y: spring(isClosing ? 100 : 0, { stiffness: 150, damping: 17 }),
          opacity: spring(isClosing ? 0 : 1),
        }}
        onRest={this.props.onAnimationRest}
      >
        {interpolated => (
          <ModalContainer
            style={{
              background: 'rgba(0, 0, 0, 0.5)',
              opacity: interpolated.opacity,
              pointerEvents: isClosing ? 'none' : 'auto',
            }}
          >
            <ModalInner style={{ transform: `scale(${interpolated.scale}) translateY(${interpolated.y}px)` }}>
              <Title>
                <ContentWithRight
                  content={props.title}
                  right={
                    <IconButton onClick={props.onClose} icon="close" isInverted />
                  }
                />
              </Title>
              <Body>
                <Stacked>
                  {props.children}

                  {(props.primaryButton != null || props.buttons != null) && (
                    <ContentWithRight
                      content={
                        <Horizontal>
                          {props.buttons}
                        </Horizontal>
                      }
                      right={props.primaryButton}
                    />
                  )}
                </Stacked>
              </Body>
            </ModalInner>
          </ModalContainer>
        )}
      </Motion>
    );
  }
}
