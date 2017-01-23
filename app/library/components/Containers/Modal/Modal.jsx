/* eslint-disable no-unused-expressions */

import React, { PropTypes } from 'react';
import Portal from 'react-portal';
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
  background-color: rgba(0, 0, 0, 0.5);
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0 ${({ theme }) => theme.components.spacing_horizontal};
`;

const ModalInner = styled.div`
  max-width: 900px;
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
  background: #BF2A23;
  color: white;
`;

const Body = styled.div`
  padding: 20px;
  min-height: 40px;
`;

export const Modal = props => (
  <Portal
    isOpened={props.isOpen}
    onOpen={() => { document.body.className += ' p-modal-open'; }}
    onClose={() => { document.body.className = document.body.className.replace(' p-modal-open', ''); }}
  >
    <ModalWithBackdrop {...props}>{props.children}</ModalWithBackdrop>
  </Portal>
);

Modal.propTypes = {
  isOpen: PropTypes.boolean,

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

const ModalWithBackdrop = props => (
  <ModalContainer>
    <ModalInner>
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
);
