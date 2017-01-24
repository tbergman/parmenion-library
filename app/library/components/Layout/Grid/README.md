**Row with responsive columns**

    import {Row, Column, Stacked, DebugBox} from 'library'

    <Stacked>
      <Row>
        <Column md={6}>
          <DebugBox label="6" />
        </Column>
        <Column md={6}>
          <DebugBox label="6" />
        </Column>
      </Row>

      <Row>
        <Column md={3}>
          <DebugBox label="3" />
        </Column>
        <Column md={9}>
          <DebugBox label="9" />
        </Column>
      </Row>

      <Row>
        <Column md={2}>
          <DebugBox label="2" />
        </Column>
        <Column md={8}>
          <DebugBox label="8" />
        </Column>
        <Column md={2}>
          <DebugBox label="2" />
        </Column>
      </Row>
    </Stacked>

**Row with flexible columns**

    import {Row, Column, Stacked, DebugBox} from 'library'

    <Stacked>
      <Row>
        <Column>
          <DebugBox label="Fit content" />
        </Column>
        <Column fill>
          <DebugBox label="Fill remaining space" />
        </Column>
      </Row>

      <Row>
        <Column fill>
          <DebugBox label="Fill remaining space" />
        </Column>
        <Column>
          <DebugBox label="Fit content" />
        </Column>
      </Row>
    </Stacked>

**Vertical alignment of columns**

    import {Row, Column, Stacked, DebugBox} from 'library'

    <Stacked>
      <Row>
        <Column>
          <DebugBox label="Fit content" height={200} />
        </Column>
        <Column fill>
          <DebugBox label="Fill remaining space (flex-start)" />
        </Column>
      </Row>

      <Row alignItems="center">
        <Column fill>
          <DebugBox label="Fill remaining space (center)" />
        </Column>
        <Column>
          <DebugBox label="Fit content" height={200} />
        </Column>
      </Row>

      <Row alignItems="flex-end">
        <Column>
          <DebugBox label="Fit content" height={200} />
        </Column>
        <Column fill>
          <DebugBox label="Fill remaining space (flex-end)" />
        </Column>
      </Row>
    </Stacked>

**Justify content**

    import {Row, Column, Stacked, DebugBox} from 'library'

    <Stacked>
      <Row>
        <Column>
          <DebugBox label="flex-start" />
        </Column>
        <Column>
          <DebugBox label="flex-start" />
        </Column>
        <Column>
          <DebugBox label="flex-start" />
        </Column>
      </Row>

      <Row justifyContent="center">
        <Column>
          <DebugBox label="center" />
        </Column>
        <Column>
          <DebugBox label="center" />
        </Column>
        <Column>
          <DebugBox label="center" />
        </Column>
      </Row>

      <Row justifyContent="flex-end">
        <Column>
          <DebugBox label="flex-end" />
        </Column>
        <Column>
          <DebugBox label="flex-end" />
        </Column>
        <Column>
          <DebugBox label="flex-end" />
        </Column>
      </Row>

      <Row justifyContent="space-around">
        <Column>
          <DebugBox label="space-around" />
        </Column>
        <Column>
          <DebugBox label="space-around" />
        </Column>
        <Column>
          <DebugBox label="space-around" />
        </Column>
      </Row>

      <Row justifyContent="space-between">
        <Column>
          <DebugBox label="space-between" />
        </Column>
        <Column>
          <DebugBox label="space-between" />
        </Column>
        <Column>
          <DebugBox label="space-between" />
        </Column>
      </Row>
    </Stacked>

**Wrapped columns**

    import {Row, Column, DebugBox} from 'library'

    <Row justifyContent="space-between">
      <Column md={3}>
        <DebugBox label="3" />
      </Column>
      <Column md={3}>
        <DebugBox label="3" />
      </Column>
      <Column md={3}>
        <DebugBox label="3" />
      </Column>
      <Column md={3}>
        <DebugBox label="3" />
      </Column>
      <Column md={3}>
        <DebugBox label="3" />
      </Column>
      <Column md={3}>
        <DebugBox label="3" />
      </Column>
      <Column md={3}>
        <DebugBox label="3" />
      </Column>
    </Row>
