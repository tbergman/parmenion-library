import React from 'react';
import Alert from '../library/components/alert/alert.jsx'
import theme from '../library/theme/index.js';

export default class Foo extends React.Component {
    render() {
        return <div>
          <Alert title="This is an alert heading" color={theme.colors.brand.warning} hasArrow={true}>
            This is the alert content  
          </Alert>
        </div>;
    }
}