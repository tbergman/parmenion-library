import React from 'react';
import Alert from '../library/components/alert/alert.jsx'

export default class Foo extends React.Component {
    render() {
        return <div>
          <Alert title="This is an alert heading">
            This is the alert content  
          </Alert>
        </div>;
    }
}