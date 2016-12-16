import React from 'react';
import Alert from '../library/components/alert/alert.jsx'
import Button from '../library/components/button/button.jsx'
import brand from '../brand';

export default class Foo extends React.Component {
    render() {
        return <div>
          <Alert title="This is an alert heading" status={3} hasArrow={false}>
            This is the alert content  
          </Alert>
          <Button type={1}>
            This is the button content  
          </Button>
        </div>;
    }
}