import React from 'react';

import {
  Alert, Button, ButtonGroup, InputGroup, InputText, InputPassword, Textarea, Grid, Row, Column,
  Bar, BarMenu, BarMenuItem, Dropdown, Menu, MenuItem, Position, Float, Table, List, Select, Radio,
  Checkbox, Label, Group, H2, H3, H4, H5, H6,
} from 'library';

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

    <Group label={<Label>This is a group label: </Label>}>
      <Checkbox id="c1" name="checkboxgroup" value="1" status={1} isInline>
        This is option 1
      </Checkbox>
      <Checkbox id="c2" name="checkboxgroup" value="2" status={2} isInline>
        This is option 2
      </Checkbox>
      <Checkbox id="c3" name="checkboxgroup" value="3" status={3} isInline>
        This is option 3
      </Checkbox>
    </Group>

    <Group label={<Label>This is another group label: </Label>} isHorizontal>
      <Radio id="r1" name="radiogroup" value="1" status={1} isInline>
        This is option 1
      </Radio>
      <Radio id="r2" name="radiogroup" value="2" status={2} isInline>
        This is option 2
      </Radio>
      <Radio id="r3" name="radiogroup" value="3" status={3} isInline>
        This is option 3
      </Radio>
    </Group>

    <Group label={<Label>This is another group label: </Label>} isHorizontal>
      <InputText placeholder="Enter your text here" />
    </Group>

    <Group label={<Label>This is another group label: </Label>} isHorizontal>
      <Select>
        <option value="0">Please select</option>
        <option value="1">option 1</option>
        <option value="2">option 2</option>
      </Select>
    </Group>

    <List hasBullets>
      <li>This is a list item 1</li>
      <li>This is a list item 2</li>
      <li>This is a list item 3</li>
      <li>This is a list item 4</li>
      <li>This is a list item 5</li>
    </List>

    <List isSpaced>
      <li>This is a list item</li>
      <li>This is a list item</li>
      <li>This is a list item</li>
      <li>This is a list item</li>
      <li>This is a list item</li>
    </List>

    <List isSpaced hasBullets>
      <li>This is a list item</li>
      <li>This is a list item</li>
      <li>This is a list item</li>
      <li>This is a list item</li>
      <li>This is a list item</li>
    </List>

    <List isInline>
      <li>This is a list item</li>
      <li>This is a list item</li>
      <li>This is a list item</li>
      <li>This is a list item</li>
      <li>This is a list item</li>
    </List>

    <List isInline isSpaced>
      <li>This is a list item</li>
      <li>This is a list item</li>
      <li>This is a list item</li>
      <li>This is a list item</li>
      <li>This is a list item</li>
    </List>

    <Table isStriped isLight isHover breakpoint={800}>
      <thead>
        <tr>
          <th>Hello</th>
          <th>Hello</th>
          <th>Hello</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </td>
          <td>Hi</td>
          <td>Hi</td>
        </tr>
        <tr>
          <td>Hi</td>
          <td>Hi</td>
          <td>Hi</td>
        </tr>
        <tr>
          <td>Hi</td>
          <td>Hi</td>
          <td>Hi</td>
        </tr>
        <tr>
          <td>Hi</td>
          <td>Hi</td>
          <td>Hi</td>
        </tr>
      </tbody>
    </Table>

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
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum tellus ac sapien consectetur,
      vitae efficitur tortor tristique. Mauris vitae ligula ut ligula rutrum pretium nec id nibh.
      Nullam non nibh laoreet, porttitor lacus at, cursus velit. Sed sodales orci nec iaculis sodales.
    </p>

    <H3>This is a heading 3 component</H3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum tellus ac sapien consectetur,
      vitae efficitur tortor tristique. Mauris vitae ligula ut ligula rutrum pretium nec id nibh.
      Nullam non nibh laoreet, porttitor lacus at, cursus velit. Sed sodales orci nec iaculis sodales.
    </p>

    <H4>This is a heading 4 component</H4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum tellus ac sapien consectetur,
      vitae efficitur tortor tristique. Mauris vitae ligula ut ligula rutrum pretium nec id nibh.
      Nullam non nibh laoreet, porttitor lacus at, cursus velit. Sed sodales orci nec iaculis sodales.
    </p>

    <H5>This is a heading 5 component</H5>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum tellus ac sapien consectetur,
      vitae efficitur tortor tristique. Mauris vitae ligula ut ligula rutrum pretium nec id nibh.
      Nullam non nibh laoreet, porttitor lacus at, cursus velit. Sed sodales orci nec iaculis sodales.
    </p>

    <H6>This is a heading 6 component</H6>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum tellus ac sapien consectetur,
      vitae efficitur tortor tristique. Mauris vitae ligula ut ligula rutrum pretium nec id nibh.
      Nullam non nibh laoreet, porttitor lacus at, cursus velit. Sed sodales orci nec iaculis sodales.
    </p>

    <Grid>
      <Row>
        <Column sm={6} xs={12}>
          <Alert title="This is an alert heading" status={1}>
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
          <Alert title="This is an alert heading" status={3}>
            This is the alert content
          </Alert>
        </Column>
        <Column md={1} sm={5}>
          <Alert title="This is an alert heading" status={4} hasArrow>
            This is the alert content
            This is the alert content
            This is the alert content
            This is the alert content
            This is the alert content
          </Alert>
        </Column>
        <Column md={1} sm={5}>
          <Alert title="This is an alert heading" status={1}>
            This is the alert content
          </Alert>
        </Column>
        <Column md={1} sm={5}>
          <Alert title="This is an alert heading" status={2} hasArrow>
            This is the alert content
          </Alert>
        </Column>
        <Column md={1} sm={5}>
          <Alert title="This is an alert heading" status={3}>
            This is the alert content
          </Alert>
        </Column>
      </Row>
    </Grid>

    <Grid>
      <Row divisions={5} spacing={0}>
        <Column md={1} sm={5} flex>
          <Alert title="This is an alert heading" status={3} hasArrow>
            This is the alert content
          </Alert>
        </Column>
        <Column md={1} sm={5} flex>
          <Alert title="This is an alert heading" status={4}>
            This is the alert content
            This is the alert content
            This is the alert content
            This is the alert content
            This is the alert content
          </Alert>
        </Column>
        <Column md={1} sm={5} flex>
          <Alert title="This is an alert heading" status={1} hasArrow>
            This is the alert content
          </Alert>
        </Column>
        <Column md={1} sm={5} flex>
          <Alert title="This is an alert heading" status={2}>
            This is the alert content
          </Alert>
        </Column>
        <Column md={1} sm={5} flex>
          <Alert title="This is an alert heading" status={3} hasArrow>
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
