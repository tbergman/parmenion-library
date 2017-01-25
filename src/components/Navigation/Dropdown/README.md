**Normal**

    import {Dropdown, Menu, MenuItem, Icon, Size} from '@parmenion/library'

    <Size height={250}>
      <Dropdown
        trigger={
          <Button>
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
    </Size>

**Hover**

    import {Dropdown, Menu, MenuItem, Icon, Size} from '@parmenion/library'

    <Size height={250}>
      <Dropdown
        isHover
        trigger={
          <Button>
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
    </Size>
