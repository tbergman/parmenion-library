**Normal**

    import {Alert} from '@parmenion/library'

    <Alert>
      This is the alert content
    </Alert>

**With title**

    import {Alert} from '@parmenion/library'

    <Alert title="Alert title">
      This is the alert content
    </Alert>

**Styles**

    import {Alert} from '@parmenion/library'

    <Alert title="Success" status={1}>
      This is the alert content
    </Alert>
    <Alert title="Danger" status={2}>
      This is the alert content
    </Alert>
    <Alert title="Warning" status={3}>
      This is the alert content
    </Alert>
    <Alert title="Info" status={4}>
      This is the alert content
    </Alert>

**Sizes**

    import {Alert} from '@parmenion/library'

    <Alert>
      I am normal
    </Alert>

    <Alert status={3} isSmall>
      I am small
    </Alert>

**With arrow**

    import {Alert} from '@parmenion/library'

    <Alert title="Alert title" hasArrow>
      This is the alert content
    </Alert>

    <Alert status={2} isSmall hasArrow>
      This is the alert content
    </Alert>
