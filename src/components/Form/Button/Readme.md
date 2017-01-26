**Standard button**

    import {Button} from '@parmenion/library'

    <Button>This is a standard button</Button>

**Styles**

    import {Button} from '@parmenion/library'

    <Button type={1}>Primary</Button>{' '}
    <Button type={2}>Secondary</Button>{' '}
    <Button type={3}>Danger</Button>{' '}
    <Button type={4}>Transparent</Button>

**Sizes**

    import {Button} from '@parmenion/library'

    <Button>I'm normal</Button>{' '}
    <Button isSmall>I'm small</Button>

**Block**

    import {Button, Stacked} from '@parmenion/library'

    <Stacked>
      <Button>I'm not a block</Button>
      <Button isBlock>I am a block</Button>
    </Stacked>

**With icons**

    import {Button, Icon} from '@parmenion/library'

    <Button icon={<Icon icon="file" />}>Files to the left of me</Button>
    <Button type={2} icon={<Icon icon="chevronRight" isInverted />} iconRight>Arrows to the right</Button>
