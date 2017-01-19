**Standard button**

    import {Button} from 'library'

    <Button>This is a standard button</Button>

**Styles**

    import {Button} from 'library'

    <Button type={1}>Primary</Button>{' '}
    <Button type={2}>Secondary</Button>{' '}
    <Button type={3}>Danger</Button>{' '}
    <Button type={4}>Transparent</Button>

**Sizes**

    import {Button} from 'library'

    <Button>I'm normal</Button>{' '}
    <Button isSmall>I'm small</Button>

**Block**

    import {Button, Stacked} from 'library'

    <Stacked>
      <Button>I'm not a block</Button>
      <Button isBlock>I am a block</Button>
    </Stacked>
