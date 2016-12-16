import React from 'react';
import Alert from '../library/components/alert/alert.jsx'
import brand from '../brand';

export default class Foo extends React.Component {
    render() {
        return <div>
          <Alert title="This is an alert heading" status={2} hasArrow={false}>
            This is the alert content  
          </Alert>
        </div>;
    }
}