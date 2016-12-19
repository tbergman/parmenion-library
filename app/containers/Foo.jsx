import React from 'react';
import Alert from '../library/components/alert/alert.jsx'
import Button from '../library/components/button/button.jsx'
import ButtonGroup from '../library/components/button/ButtonGroup.jsx'
import InputGroup from '../library/components/button/InputGroup.jsx'
import InputText from '../library/components/form/InputText.jsx'
import InputPassword from '../library/components/form/InputPassword.jsx'
import Textarea from '../library/components/form/Textarea.jsx'
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
            <Button type={1} isSmall>
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
            <Button isBlock>
              This is a block button
            </Button>
          </p>

          <p>
            <Button type={4}>
              This is a link button
            </Button>
          </p>

          <p>
            <Button isDisabled>
              Disabled button
            </Button>
          </p>

          <p>
            <InputText placeholder='Enter your text here' />
          </p>

          <p>
            <InputPassword placeholder='Enter your password' />
          </p>

          <p>
            <Textarea rows={4} />
          </p>

          <ButtonGroup>
            <Button>
              This is a button
            </Button>
            <Button>
              This is a button
            </Button>
            <Button>
              This is a button
            </Button>
          </ButtonGroup>

          <ButtonGroup isJustified>
            <Button>
              This is a button
            </Button>
            <Button>
              This is a button
            </Button>
            <Button>
              This is a button
            </Button>
          </ButtonGroup>

          <InputGroup start="£" end=".00">
            <InputText placeholder='Enter money' />
          </InputGroup>

          <InputGroup start="£">
            <InputText placeholder='Enter money' isSmall />
          </InputGroup>

          <InputGroup 
            start={<Button>-</Button>} 
            end={<Button>+</Button>}
          >
            <InputText placeholder='Enter money' />
          </InputGroup>

        </div>;
    }
}