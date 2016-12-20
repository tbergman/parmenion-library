import React from 'react';
import Alert from '../library/components/Status/Alert';
import Button from '../library/components/Form/Button';
import ButtonGroup from '../library/components/Form/ButtonGroup';
import InputGroup from '../library/components/Form/InputGroup';
import InputText from '../library/components/Form/InputText';
import InputPassword from '../library/components/Form/InputPassword';
import Textarea from '../library/components/Form/Textarea';
import { Grid, Row, Column } from '../library/components/Grid';
import brand from '../brand';

export default class Foo extends React.Component {
    render() {
        return <div>

          <Grid>
            <Row>
              <Column sm={6} xs={12}>
                <Alert title="This is an alert heading" status={1} hasArrow={false}>
                  This is the alert content  
                </Alert>
              </Column>
              <Column sm={6} xs={12}>
                <Alert title="This is an alert heading" status={2} hasArrow={false}>
                  Aliquam elit quam, pretium in augue in, aliquam tempor elit. Nam porttitor purus et bibendum vehicula. 
                  Curabitur fringilla scelerisque blandit. Vivamus id tortor nunc. Aenean tristique mattis lobortis. 
                  Sed in diam sed purus interdum suscipit. Duis arcu purus, scelerisque vitae felis et, euismod dictum magna. 
                  Donec vestibulum ante turpis, et gravida elit commodo ac.
                </Alert>
              </Column>
            </Row>
          </Grid>

          <Grid>
            <Row divisions={5}>
              <Column md={1} sm={5}>
                <Alert title="This is an alert heading" status={3} hasArrow={false}>
                  This is the alert content  
                </Alert>
              </Column>
              <Column md={1} sm={5}>
                <Alert title="This is an alert heading" status={4} hasArrow={false}>
                  This is the alert content  
                </Alert>
              </Column>
              <Column md={1} sm={5}>
                <Alert title="This is an alert heading" status={1} hasArrow={false}>
                  This is the alert content  
                </Alert>
              </Column>
              <Column md={1} sm={5}>
                <Alert title="This is an alert heading" status={2} hasArrow={false}>
                  This is the alert content  
                </Alert>
              </Column>
              <Column md={1} sm={5}>
                <Alert title="This is an alert heading" status={3} hasArrow={false}>
                  This is the alert content  
                </Alert>
              </Column>
            </Row>
          </Grid>

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

          <br /><br />

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

          <br />

          <InputGroup start="£" end=".00">
            <InputText placeholder='Enter money' />
          </InputGroup>

          <br />

          <InputGroup start="£">
            <InputText placeholder='Enter money' isSmall />
          </InputGroup>

          <br />

          <InputGroup 
            start={<Button>-</Button>} 
            end={<Button>+</Button>}
          >
            <InputText placeholder='Enter money' />
          </InputGroup>

        </div>;
    }
}