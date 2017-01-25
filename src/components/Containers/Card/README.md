**With content**

    import {Card} from '@parmenion/library'

    <Card>
      Hello world I am some content!
    </Card>

**With heading**

    import {Card} from '@parmenion/library'

    <Card heading="Header">
      Hello world I am some content!
    </Card>

**With action list**

    import {Card} from '@parmenion/library'

    <Card heading="Card with action list">
      <Card.ActionList>
        <Card.ActionList.Item label="Go to screen 1" href="#Card" />
        <Card.ActionList.Item label="Go to screen 2" href="#Card" />
      </Card.ActionList>
    </Card>
