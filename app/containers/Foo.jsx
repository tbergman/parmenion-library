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

          <p>
            <Button>
              This is a default button
            </Button>
          </p>

          <p>
            <Button type={1} isSmall={true}>
              This is a small primary button
            </Button>
          </p>

          <p>
            <Button type={2} onClick={() => console.log("Clicked!")}>
              Log a console message via "onClick()"
            </Button>
          </p>
          
          <p>
            <Button type={3} href="http://www.google.com">
              Go to www.google.com via "href"
            </Button>
          </p>
          
          <p>
            <Button to="/">
              Go to Home via "to"
            </Button>
          </p>

          <p>
            <Button isBlock={true}>
              This is a block button
            </Button>
          </p>

          <p>
            <Button type={4}>
              This is a link button
            </Button>
          </p>

          <p>
            <Button isDisabled={true}>
              Disabled button
            </Button>
          </p>

        </div>;
    }
}