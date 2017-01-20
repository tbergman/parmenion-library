import React from 'react';

import {
  Alert, Button, ButtonGroup, InputGroup, InputText, InputPassword, Textarea, Grid, Row, Column,
  Bar, BarMenu, BarMenuItem, BarMenuItemDropdown, Dropdown, Menu, MenuItem, Position, Float, Table, List, Select, Radio,
  Checkbox, Label, Group, PageHeader, H2, H3, H4, H5, H6, Icon, Tooltip, Overlay, Tag, Spinner, Stacked, Content,
} from 'library';

export default props => (
  <div>
    <Position top left right zindex={10}>
      <Bar>
        <Float right>
          <BarMenu>
            <BarMenuItem to="/">
              <Icon icon="comment" size={1.5} isInverted />
            </BarMenuItem>
            <BarMenuItem to="/">
              <Icon icon="infoCircle" size={1.5} isInverted />
            </BarMenuItem>
            <BarMenuItemDropdown
              isHover
              isRight
              menu={
                <Menu>
                  <MenuItem to="/bar" icon={<Icon icon="calendar" />} description="This is the description yeah">
                    This item has an icon
                  </MenuItem>
                  <MenuItem to="/bar" description="This is the description yeah">
                    This item doesn{'\''}t have an icon
                  </MenuItem>
                  <MenuItem to="/bar" icon={<Icon icon="file" />} description="This is the description yeah" isActive>
                    This item is active
                  </MenuItem>
                </Menu>
              }
            >
              <Icon icon="cog" size={1.5} isInverted />
            </BarMenuItemDropdown>
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
          <BarMenuItemDropdown
            menu={
              <Menu>
                <MenuItem to="/bar" icon={<Icon icon="calendar" />} description="This is the description yeah">
                  This item has an icon
                </MenuItem>
                <MenuItem to="/bar" description="This is the description yeah">
                  This item doesn{'\''}t have an icon
                </MenuItem>
                <MenuItem to="/bar" icon={<Icon icon="file" />} description="This is the description yeah" isActive>
                  This item is active
                </MenuItem>
              </Menu>
            }
          >
            Dropdown click <Icon icon="caretDown" isInverted />
          </BarMenuItemDropdown>
          <BarMenuItemDropdown
            isHover
            menu={
              <Menu>
                <MenuItem to="/bar" icon={<Icon icon="calendar" />} description="This is the description yeah">
                  This item has an icon
                </MenuItem>
                <MenuItem to="/bar" description="This is the description yeah">
                  This item doesn{'\''}t have an icon
                </MenuItem>
                <MenuItem to="/bar" icon={<Icon icon="file" />} description="This is the description yeah" isActive>
                  This item is active
                </MenuItem>
              </Menu>
            }
          >
            Dropdown hover <Icon icon="caretDown" isInverted />
          </BarMenuItemDropdown>

        </BarMenu>
      </Bar>
    </Position>

    <Stacked>

      <PageHeader>This is a heading 1 component</PageHeader>

      <Group label={<Label>This is a select with autocomplete: </Label>} isHorizontal>
        <Select
          id="SelectAutoComplete"
          placeholder="Search for options"
          isAutocomplete
          items={[
            {
              id: 1,
              name: 'Option A',
            },
            {
              id: 2,
              name: 'Option B',
            },
            {
              id: 3,
              name: 'Option C',
            },
            {
              id: 4,
              name: 'Option D',
            },
            {
              id: 5,
              name: 'Option E',
            },
            {
              id: 6,
              name: 'Option F',
            },
            {
              id: 7,
              name: 'Option AA',
            },
            {
              id: 8,
              name: 'Option B',
            },
            {
              id: 9,
              name: 'Option C',
            },
            {
              id: 11,
              name: 'Option D',
            },
            {
              id: 12,
              name: 'Option E',
            },
            {
              id: 13,
              name: 'Option F',
            },
            {
              id: 14,
              name: 'Option AAA',
            },
            {
              id: 15,
              name: 'Option B',
            },
            {
              id: 16,
              name: 'Option C',
            },
            {
              id: 17,
              name: 'Option D',
            },
            {
              id: 22,
              name: 'Option E',
            },
            {
              id: 23,
              name: 'Option F',
            },
          ]}
        />
      </Group>


      <Group label={<Label>This is a select without autocomplete: </Label>} isHorizontal>
        <Select
          id="SelectNormal"
          placeholder="Please select"
          items={[
            {
              id: 1,
              name: 'Apples',
            },
            {
              id: 2,
              name: 'Pears',
            },
            {
              id: 3,
              name: 'Bananas',
            },
            {
              id: 4,
              name: 'Oranges',
            },
            {
              id: 5,
              name: 'Grapes',
            },
            {
              id: 6,
              name: 'Pineapples',
            },
            {
              id: 7,
              name: 'Lemons',
            },
            {
              id: 8,
              name: 'Limes',
            },
            {
              id: 9,
              name: 'Strawberries',
            },
          ]}
        />
      </Group>

      <div spaceBefore={1} spaceAfter={2}>

        <Button to="/">
          <Icon icon="infoCircle" /> This is my icon in a button yeah
        </Button>

        <Tooltip text="Hey this is a tooltip" position={0}>
          <Button to="/">Top</Button>
        </Tooltip>

        <Tooltip text="This is a longer tooltip to the right" position={1}>
          <Button to="/">Right</Button>
        </Tooltip>

        <Tooltip text="Hey this is a tooltip" position={2}>
          <Button to="/">Bottom</Button>
        </Tooltip>

        <Tooltip text="Hey this is a tooltip too" position={3}>
          <Button to="/">Left</Button>
        </Tooltip>

      </div>

      <p>
        <Icon icon="arrowRight" /> This is another icon
      </p>

      <p>
        <Icon icon="arrowUp" size={1} />
        <Icon icon="arrowDown" size={2} />
        <Icon icon="arrowLeft" size={3} />
        <Icon icon="arrowRight" size={4} />
        <Icon icon="balanceScale" size={5} />
        <Icon icon="ban" />
        <Icon icon="bank" />
        <Icon icon="bell" />
        <Icon icon="bolt" />
        <Icon icon="book" />
        <Icon icon="calendar" />
        <Icon icon="caretDown" />
        <Icon icon="caretUp" />
        <Icon icon="chain" />
        <Icon icon="check" />
        <Icon icon="checkCircle" />
        <Icon icon="chevronDown" />
        <Icon icon="chevronLeft" />
        <Icon icon="chevronRight" />
        <Icon icon="chevronUp" />
        <Icon icon="clock" />
        <Icon icon="close" />
        <Icon icon="fork" />
        <Icon icon="cog" />
        <Icon icon="comment" />
        <Icon icon="commentCheck" />
        <Icon icon="commenting" />
        <Icon icon="compress" />
        <Icon icon="creditCard" />
        <Icon icon="download" />
        <Icon icon="envelope" />
        <Icon icon="exchange" />
        <Icon icon="exclamation" />
        <Icon icon="expand" />
        <Icon icon="externalLink" />
        <Icon icon="file" />
        <Icon icon="fileExcel" />
        <Icon icon="fileImage" />
        <Icon icon="filePdf" />
        <Icon icon="filePowerpoint" />
        <Icon icon="fileText" />
        <Icon icon="fileWord" />
        <Icon icon="group" />
        <Icon icon="home" />
        <Icon icon="cursor" />
        <Icon icon="infoCircle" />
        <Icon icon="key" />
        <Icon icon="lineChat" />
        <Icon icon="list" />
        <Icon icon="listNumber" />
        <Icon icon="lock" />
        <Icon icon="minus" />
        <Icon icon="minusCircle" />
        <Icon icon="pencil" />
        <Icon icon="pieChart" />
        <Icon icon="plus" />
        <Icon icon="plusCircle" />
        <Icon icon="print" />
        <Icon icon="questionCircle" />
        <Icon icon="search" />
        <Icon icon="shield" />
        <Icon icon="signIn" />
        <Icon icon="signOut" />
        <Icon icon="tag" />
        <Icon icon="tasks" />
        <Icon icon="timesCircle" />
        <Icon icon="tint" />
        <Icon icon="upload" />
        <Icon icon="user" />
        <Icon icon="userPlus" />
        <Icon icon="userSecret" />
        <Icon icon="userTimes" />
      </p>

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

      <p>
        {'Here is a spinner that fits inline'}
        <Spinner />
      </p>

      <div style={{ position: 'relative' }}>
        <Overlay />
        <Spinner isCentered />
        <p>
          This is some content within a relatively positioned block that has
          an overlay.
        </p>
        <p>
          <Button>This is a button right here <Tag>I love buttons</Tag></Button>
        </p>
      </div>

      <div style={{ position: 'relative' }}>
        <Overlay isInverted />
        <Spinner isInverted isCentered />
        <p>
          This is some content within a relatively positioned block that has
          a dark overlay.
        </p>
        <p>
          <Button>This is a button right here <Tag>I love buttons</Tag></Button>
        </p>
      </div>

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
          <MenuItem to="/bar" icon={<Icon icon="calendar" />} description="This is the description yeah">
            This item has an icon
          </MenuItem>
          <MenuItem to="/bar" description="This is the description yeah">
            This item doesn{'\''}t have an icon
          </MenuItem>
          <MenuItem to="/bar" icon={<Icon icon="file" />} description="This is the description yeah" isActive>
            This item is active
          </MenuItem>
        </Menu>
      </Dropdown>

      <H2>{"Here's a menu on it's own"}</H2>
      <Menu>
        <MenuItem to="/bar" icon={<Icon icon="file" />} description="This is the description yeah">
          This item has an icon
        </MenuItem>
        <MenuItem to="/bar" description="This is the description yeah">
          This item doesn{'\''}t have an icon
        </MenuItem>
        <MenuItem to="/bar" icon={<Icon icon="file" />} description="This is the description yeah" isActive>
          This item is active
        </MenuItem>
      </Menu>

      <Content>
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
      </Content>

      <Grid>
        <Row>
          <Column sm={6} xs={12}>
            <Alert title="This is an alert heading" icon={<Icon icon="calendar" size={2} />} >
              <Content>
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
              </Content>
            </Alert>
          </Column>
          <Column sm={6} xs={12}>
            <Content>
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
            </Content>
          </Column>
        </Row>
      </Grid>

      <Grid>
        <Row divisions={5}>
          <Column md={1} sm={5}>
            <Alert title="This is an alert heading" status={3} isSmall>
              This is the alert content
            </Alert>
          </Column>
          <Column md={1} sm={5}>
            <Alert title="This is an alert heading" status={4} isSmall hasArrow>
              This is the alert content
              This is the alert content
              This is the alert content
              This is the alert content
              This is the alert content
            </Alert>
          </Column>
          <Column md={1} sm={5}>
            <Alert title="This is an alert heading" status={1} isSmall>
              This is the alert content
            </Alert>
          </Column>
          <Column md={1} sm={5}>
            <Alert title="This is an alert heading" status={2} isSmall hasArrow>
              This is the alert content
            </Alert>
          </Column>
          <Column md={1} sm={5}>
            <Alert title="This is an alert heading" status={3} isSmall>
              This is the alert content
            </Alert>
          </Column>
        </Row>
      </Grid>

      <Grid>
        <Row divisions={5} spacing={0}>
          <Column md={1} sm={5} flex>
            <Alert title="This is an alert heading" status={3} isSmall hasArrow>
              This is the alert content
            </Alert>
          </Column>
          <Column md={1} sm={5} flex>
            <Alert title="This is an alert heading" status={4} isSmall>
              This is the alert content
              This is the alert content
              This is the alert content
              This is the alert content
              This is the alert content
            </Alert>
          </Column>
          <Column md={1} sm={5} flex>
            <Alert title="This is an alert heading" status={1} isSmall hasArrow>
              This is the alert content
            </Alert>
          </Column>
          <Column md={1} sm={5} flex>
            <Alert title="This is an alert heading" status={2} isSmall>
              This is the alert content
            </Alert>
          </Column>
          <Column md={1} sm={5} flex>
            <Alert title="This is an alert heading" status={3} isSmall hasArrow>
              This is the alert content
            </Alert>
          </Column>
        </Row>
      </Grid>

      <Button>
        This is a default button
      </Button>

      <Button type={1} isSmall>
        This is a small primary button
      </Button>

      <Button type={2} onClick={() => console.log('Clicked!')}>
        Log a console message via {'"onClick()"'}
      </Button>

      <Button type={3} href="http://www.google.com">
        Go to www.google.com via {'"href"'}
      </Button>

      <Button to="/">
        Go to Home via {'"to"'}
      </Button>

      <Button isBlock>
        This is a block button
      </Button>

      <Button type={4}>
        This is a link button
      </Button>

      <Button isDisabled>
        Disabled button
      </Button>

      <InputText placeholder="Enter your text here" />

      <InputPassword placeholder="Enter your password" />

      <Textarea rows={10} id="MyId" />

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
        <InputText placeholder="Enter money" />
      </InputGroup>

      <InputGroup start="£">
        <InputText placeholder="Enter money" isSmall />
      </InputGroup>

      <InputGroup
        start={<Button>-</Button>}
        end={<Button>+</Button>}
      >
        <InputText placeholder="Enter money" />
      </InputGroup>

    </Stacked>

  </div>
);
