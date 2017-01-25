`parmenion-library` is a comprehensive set of React components which you can use to construct production-ready, data-dense web applications. It is **not** possible to use `parmenion-library` as a standalone CSS framework, it must be used with React.

Principles
==========

### [Layout-first](#Layout)

Semantic and reusable layout is one of the hardest things to accomplish in modern web applications. That is why the components in this library adhere to a strict set of rules which decouples the responsibility of layout from visual components. Margins and paddings are exclusively used in layout components, and no other components will add or expect certain margins or gutters.

For example:

    import {Stacked, Row, Column, DebugBox} from '@parmenion/library'

    <Stacked>
      <Row>
        <Column fill><DebugBox /></Column>
        <Column fill><DebugBox /></Column>
      </Row>
      <DebugBox />
    </Stacked>

*Pro tip: Press on "Show code" to show the JSX for any examples on this page. You can also edit the JSX live in the browser*

As you can see in the above example, the margin/gutter/space in between all of the placeholders is delegated to dedicated layout components (in this example, [`<Stacked />`](#Stacked), [`<Row />`](#Row) and [`<Column />`](#Row)). This means you can place any components you like inside these layout components, and the result will be predictable and consistent:

    import {Stacked, Row, Column, InputText} from '@parmenion/library'

    <Stacked>
      <Row>
        <Column fill><InputText placeholder="Some input" /></Column>
        <Column fill><InputText placeholder="Some input" /></Column>
      </Row>
      <InputText placeholder="Some input" />
    </Stacked>

When you have reusable layouts which are used across screens, you should abstract them into React components which can be reused and eventually moved out of your repo into the centralised library.

*Bad:*

    import {Row, Column, DebugBox} from '@parmenion/library'

    <Row>
      <Column md={3}>
        <DebugBox label="Sidebar" height={400} />
      </Column>
      <Column md={9}>
        <DebugBox label="Content" height={400} />
      </Column>
    </Row>

---

    import {Row, Column, DebugBox} from '@parmenion/library'

    <Row>
      <Column fill>
        <DebugBox label="Content" />
      </Column>
      <Column>
        <DebugBox label="Right" />
      </Column>
    </Row>

*Good:*

    import {Row, Column, DebugBox} from '@parmenion/library'

    const ContentWithSidebar = props => (
      <Row>
        <Column md={3}>
          {props.sidebar}
        </Column>
        <Column md={9}>
          {props.content}
        </Column>
      </Row>
    )

    return (
      <ContentWithSidebar
        sidebar={
          <DebugBox label="Sidebar" height={400} />
        }
        content={
          <DebugBox label="Content" height={400} />
        }
      />
    )

---

    import {Row, Column, DebugBox} from '@parmenion/library'

    const ContentWithRight = props => (
      <Row>
        <Column fill>
          {props.content}
        </Column>
        <Column>
          {props.right}
        </Column>
      </Row>
    )

    return (
      <ContentWithRight
        content={
          <DebugBox label="Content" />
        }
        right={
          <DebugBox label="Right" />
        }
      />
    )

The name of your components should have emphasis on the dominant part of the content that the user will see. For example:

*Bad:*

```js
<SidebarWithContent />
<LeftWithContent />
<RightWithContent />
```

*Good:*

```js
<ContentWithSidebar />
<ContentWithLeft />
<ContentWithRight />
```

---

It's worth noting that [`<Stacked />`](#Stacked) and [`<Horizontal />`](#Horizontal) can be used to separate each child passed in as children, for vertical and horizontal layouts respectively.

Sometimes when using other components and passing in children, there might be spacing applied to each child automagically. When this is the case, it will be documented against the corresponding prop in this styleguide as a `SpacedNode[]`.

Some of examples of this can be found at the documentation for [`<Modal />`](#Modal) (`buttons` prop will automatically space each button passed in).

---

### [Isolated Typography](#Typography)

Typography on the web naturally follows a similar layout model as conventional word processors. For example, paragraphs will have spacing around them, headers will have a bottom margin, list items will be indented.
Rather than trying to make this work around a strict, consistent layout API described above, we have opted to isolate typography (or "content") in a dedicated component.

For page headers, or isolated typography which has semantic meaning (e.g Card heading), components can be used instead of having to spawn a `<Content />` block.

See the [Typography](#Typography) section for examples of this.
