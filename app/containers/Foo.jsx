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
          <Button>
            This is a default button
          </Button>
          <Button type={1} isSmall={true}>
            This is a small primary button
          </Button>
        </div>;
    }
}