Stacks each child on top of each-other with a margin. The margin can be customised (`spaceBetween`) as a multiple of the base unit. This component can be used for laying out pages vertically.

**Default spacing**

    import {Stacked, DebugBox} from 'library'

    <Stacked>
      <DebugBox />
      <DebugBox height={200} />
      <DebugBox />
    </Stacked>

**Custom `spaceBetween`**

    import {Stacked, DebugBox} from 'library'

    <Stacked spaceBetween={3}>
      <DebugBox />
      <DebugBox height={200} />
      <DebugBox />
    </Stacked>


Individual children can also specify a custom `spaceBefore` and/or `spaceAfter` for custom spacing.

**Custom `spaceBefore` and `spaceAfter`**

    import {Stacked, DebugBox} from 'library'

    <Stacked>
      <DebugBox />
      <DebugBox spaceBefore={5} spaceAfter={3} height={200} />
      <DebugBox />
      <DebugBox />
    </Stacked>

**Custom `spaceBetween` with `spaceBefore` and `spaceAfter`**

    import {Stacked, DebugBox} from 'library'

    <Stacked spaceBetween={3}>
      <DebugBox />
      <DebugBox spaceBefore={5} spaceAfter={1} height={200} />
      <DebugBox />
      <DebugBox />
    </Stacked>
