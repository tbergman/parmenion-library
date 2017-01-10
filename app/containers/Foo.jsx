import React from 'react';
import Alert from '../library/components/Status/Alert';
import Button from '../library/components/Form/Button';
import ButtonGroup from '../library/components/Form/ButtonGroup';
import InputGroup from '../library/components/Form/InputGroup';
import InputText from '../library/components/Form/InputText';
import InputPassword from '../library/components/Form/InputPassword';
import Textarea from '../library/components/Form/Textarea';
import { Grid, Row, Column } from '../library/components/Layout/Grid';
import { Bar, BarMenu, BarMenuItem } from '../library/components/Navigation/Bar';
import Dropdown from '../library/components/Navigation/Dropdown';
import { Menu, MenuItem } from '../library/components/Navigation/Menu';
import Position from '../library/components/Layout/Position';
import Float from '../library/components/Layout/Float';
import { H1, H2, H3, H4, H5, H6 } from '../library/components/Type/Heading';
import P from '../library/components/Type/Paragraph';

export default props => (
  <div>
    <Position top left right zindex={10}>
      <Bar>
        <Float right>
          <BarMenu>
            <BarMenuItem href="http://www.parmenion.co.uk">
              Parmenion
            </BarMenuItem>
          </BarMenu>
        </Float>
        <BarMenu>
          <BarMenuItem to="/">
            Home
          </BarMenuItem>
          <BarMenuItem to="/foo">
            Foo
          </BarMenuItem>
          <BarMenuItem to="/bar">
            Bar
          </BarMenuItem>
        </BarMenu>
      </Bar>
    </Position>

    <H1>This is a heading 1 component</H1>
    <P>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum tellus ac sapien consectetur,
      vitae efficitur tortor tristique. Mauris vitae ligula ut ligula rutrum pretium nec id nibh.
      Nullam non nibh laoreet, porttitor lacus at, cursus velit. Sed sodales orci nec iaculis sodales.
    </P>

    <Dropdown
      trigger={
        <Button isBlock>
          Dropdown trigger
        </Button>
      }
    >
      <Menu>
        <MenuItem to="/bar" icon="a" description="This is the description yeah">
          This item has an icon
        </MenuItem>
        <MenuItem to="/bar" description="This is the description yeah">
          This item doesn{'\''}t have an icon
        </MenuItem>
        <MenuItem to="/bar" icon="c" description="This is the description yeah" isActive>
          This item is active
        </MenuItem>
      </Menu>
    </Dropdown>

    <br /><br /><br />

    <H2>Here{'\''}s a menu on it{'\''}s own</H2>
    <Menu>
      <MenuItem to="/bar" icon="a" description="This is the description yeah">
        This item has an icon
      </MenuItem>
      <MenuItem to="/bar" description="This is the description yeah">
        This item doesn{'\''}t have an icon
      </MenuItem>
      <MenuItem to="/bar" icon="c" description="This is the description yeah" isActive>
        This item is active
      </MenuItem>
    </Menu>

    <br /><br />

    <H2>This is a heading 2 component</H2>
    <P>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum tellus ac sapien consectetur,
      vitae efficitur tortor tristique. Mauris vitae ligula ut ligula rutrum pretium nec id nibh.
      Nullam non nibh laoreet, porttitor lacus at, cursus velit. Sed sodales orci nec iaculis sodales.
    </P>

    <H3>This is a heading 3 component</H3>
    <P>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum tellus ac sapien consectetur,
      vitae efficitur tortor tristique. Mauris vitae ligula ut ligula rutrum pretium nec id nibh.
      Nullam non nibh laoreet, porttitor lacus at, cursus velit. Sed sodales orci nec iaculis sodales.
    </P>

    <H4>This is a heading 4 component</H4>
    <P>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum tellus ac sapien consectetur,
      vitae efficitur tortor tristique. Mauris vitae ligula ut ligula rutrum pretium nec id nibh.
      Nullam non nibh laoreet, porttitor lacus at, cursus velit. Sed sodales orci nec iaculis sodales.
    </P>

    <H5>This is a heading 5 component</H5>
    <P>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum tellus ac sapien consectetur,
      vitae efficitur tortor tristique. Mauris vitae ligula ut ligula rutrum pretium nec id nibh.
      Nullam non nibh laoreet, porttitor lacus at, cursus velit. Sed sodales orci nec iaculis sodales.
    </P>

    <H6>This is a heading 6 component</H6>
    <P>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum tellus ac sapien consectetur,
      vitae efficitur tortor tristique. Mauris vitae ligula ut ligula rutrum pretium nec id nibh.
      Nullam non nibh laoreet, porttitor lacus at, cursus velit. Sed sodales orci nec iaculis sodales.
    </P>

    <Grid>
      <Row>
        <Column sm={6} xs={12}>
          <Alert title="This is an alert heading" status={1} hasArrow={false}>
            This is the alert content
          </Alert>
        </Column>
        <Column sm={6} xs={12}>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum tellus ac sapien consectetur,
            vitae efficitur tortor tristique. Mauris vitae ligula ut ligula rutrum pretium nec id nibh.
            Nullam non nibh laoreet, porttitor lacus at, cursus velit. Sed sodales orci nec iaculis sodales.
          </P>
          <P>
            Praesent pharetra nulla non nunc sollicitudin, ut dapibus massa luctus. Nam imperdiet metus ac mi condimentum,
            et scelerisque nisi fringilla. Nulla dapibus dui tempor efficitur lobortis. Curabitur rhoncus laoreet gravida.
            Nulla porta risus sapien, sed scelerisque sem pretium eu. Suspendisse at interdum justo.
          </P>
          <P>
            Vivamus sapien sapien, aliquam aliquam aliquet sit amet, molestie in dolor. Nulla facilisi. Donec imperdiet
            sapien lacus. Curabitur sed dui venenatis dui vehicula accumsan.
          </P>
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
          <Alert title="This is an alert heading" status={4} hasArrow={true}>
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
          <Alert title="This is an alert heading" status={2} hasArrow={true}>
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
      <Row divisions={5} spacing={0}>
        <Column md={1} sm={5} flex>
          <Alert title="This is an alert heading" status={3} hasArrow={true}>
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
          <Alert title="This is an alert heading" status={1} hasArrow={true}>
            This is the alert content
          </Alert>
        </Column>
        <Column md={1} sm={5} flex>
          <Alert title="This is an alert heading" status={2} hasArrow={false}>
            This is the alert content
          </Alert>
        </Column>
        <Column md={1} sm={5} flex>
          <Alert title="This is an alert heading" status={3} hasArrow={true}>
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
      <Button type={2} onClick={() => console.log('Clicked!')}>
        Log a console message via {'"onClick()"'}
      </Button>
    </p>

    <p>
      <Button type={3} href="http://www.google.com">
        Go to www.google.com via {'"href"'}
      </Button>
    </p>

    <p>
      <Button to="/">
        Go to Home via {'"to"'}
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
      <InputText placeholder="Enter your text here" />
    </p>

    <p>
      <InputPassword placeholder="Enter your password" />
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
      <InputText placeholder="Enter money" />
    </InputGroup>

    <br />

    <InputGroup start="£">
      <InputText placeholder="Enter money" isSmall />
    </InputGroup>

    <br />

    <InputGroup
      start={<Button>-</Button>}
      end={<Button>+</Button>}
    >
      <InputText placeholder="Enter money" />
    </InputGroup>

  </div>
);
