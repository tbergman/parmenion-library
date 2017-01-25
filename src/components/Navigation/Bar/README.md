**Normal**

    import {Bar, BarMenu, BarMenuItem, Icon} from '@parmenion/library'

    <Bar>
      <BarMenu>
        <BarMenuItem href="/">
          Home
        </BarMenuItem>
        <BarMenuItem href="/foo">
          Foo
        </BarMenuItem>
        <BarMenuItem href="/bar">
          Bar
        </BarMenuItem>
        <BarMenuItem href="/">
          <Icon icon="infoCircle" size={1.5} isInverted />
        </BarMenuItem>
      </BarMenu>
    </Bar>

**With dropdown item**

    import {Bar, BarMenu, BarMenuItem, BarMenuItemDropdown, Menu, MenuItem, Icon, Size} from '@parmenion/library'

    <Size height={250}>
      <Bar>
        <BarMenu>
          <BarMenuItem href="/">
            Home
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
              <Icon icon="infoCircle" size={1.5} isInverted />
          </BarMenuItemDropdown>
        </BarMenu>
      </Bar>
    </Size>
