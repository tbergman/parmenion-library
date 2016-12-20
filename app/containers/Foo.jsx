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
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum tellus ac sapien consectetur, 
                  vitae efficitur tortor tristique. Mauris vitae ligula ut ligula rutrum pretium nec id nibh. 
                  Nullam non nibh laoreet, porttitor lacus at, cursus velit. Sed sodales orci nec iaculis sodales. 
                </p>
                <p>
                  Praesent pharetra nulla non nunc sollicitudin, ut dapibus massa luctus. Nam imperdiet metus ac mi condimentum, 
                  et scelerisque nisi fringilla. Nulla dapibus dui tempor efficitur lobortis. Curabitur rhoncus laoreet gravida. 
                  Nulla porta risus sapien, sed scelerisque sem pretium eu. Suspendisse at interdum justo. 
                </p>
                <p>
                  Vivamus sapien sapien, aliquam aliquam aliquet sit amet, molestie in dolor. Nulla facilisi. Donec imperdiet 
                  sapien lacus. Curabitur sed dui venenatis dui vehicula accumsan.
                </p>
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
                  This is the alert content  
                  This is the alert content  
                  This is the alert content  
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

          <Grid>
            <Row divisions={5} spacing={100}>
              <Column md={1} sm={5} flex>
                <Alert title="This is an alert heading" status={3} hasArrow={false}>
                  This is the alert content  
                </Alert>
              </Column>
              <Column md={1} sm={5} flex>
                <Alert title="This is an alert heading" status={4} hasArrow={false}>
                  This is the alert content  
                  This is the alert content  
                  This is the alert content  
                  This is the alert content  
                  This is the alert content  
                </Alert>
              </Column>
              <Column md={1} sm={5} flex>
                <Alert title="This is an alert heading" status={1} hasArrow={false}>
                  This is the alert content  
                </Alert>
              </Column>
              <Column md={1} sm={5} flex>
                <Alert title="This is an alert heading" status={2} hasArrow={false}>
                  This is the alert content  
                </Alert>
              </Column>
              <Column md={1} sm={5} flex>
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