import React from 'react';

export const DebugBox = props => (
  <div
    style={{
      width: '100%',
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
      padding: 16,
      borderColor: 'rgba(0, 0, 0, 0.2)',
      borderWidth: 1,
      borderStyle: 'dashed',
      fontSize: 32,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      textTransform: 'uppercase',
      color: 'rgba(0, 0, 0, 0.2)',
      height: props.height,
      fontFamily: 'monospace',
    }}
  >
    {props.label || 'Content here'}
  </div>
);
