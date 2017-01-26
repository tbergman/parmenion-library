**With standard buttons**

    import {ButtonGroup, Button} from '@parmenion/library'

    <ButtonGroup>
      <Button>Hello</Button>
      <Button>World!</Button>
    </ButtonGroup>

**Different styles**

    import {ButtonGroup, Button, Stacked} from '@parmenion/library'

    <Stacked>
      <ButtonGroup>
        <Button>Normal</Button>
        <Button type={1}>Primary</Button>
        <Button type={2}>Secondary</Button>
        <Button type={3}>Danger</Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button type={1}>Save changes</Button>
        <Button>Cancel</Button>
      </ButtonGroup>
    </Stacked>

**Transparent**

    import {ButtonGroup, Button} from '@parmenion/library'

    <ButtonGroup>
      <Button type={4}>Transparent</Button>
      <Button type={4}>Another transparent button</Button>
    </ButtonGroup>

**With dropdown**

    import {ButtonGroup, Button, Dropdown, Menu, MenuItem, Icon, Size} from '@parmenion/library'

    <Size height={150}>
      <ButtonGroup>
        <Button>Hey</Button>
        <Button>Ho</Button>
        <Dropdown
          isRight
          trigger={
            <Button icon={<Icon icon="caretDown" />} iconRight>
              Let's go
            </Button>
          }
        >
          <Menu>
            <MenuItem to="/bar">
              This is an action
            </MenuItem>
            <MenuItem to="/bar">
              This is another action
            </MenuItem>
          </Menu>
        </Dropdown>
      </ButtonGroup>
    </Size>
