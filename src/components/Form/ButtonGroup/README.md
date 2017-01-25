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
