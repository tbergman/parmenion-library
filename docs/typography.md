There are various typography related components available for use.

# Content

Mixed content (paragraphs, headers, lists) should be wrapped with the `<Content />` component.
You are then able to use standard typography-related HTML elements within the `<Content />` component:

    import {Content} from '@parmenion/library'

    <Content>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat leo quis sem hendrerit sagittis. Cras ut efficitur sem. Morbi luctus risus sit amet nulla auctor, eu finibus nunc euismod.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat leo quis sem hendrerit sagittis. Cras ut efficitur sem. Morbi luctus risus sit amet nulla auctor, eu finibus nunc euismod.
      </p>
    </Content>

## Headings

All of the standard headers (1-6) are available within the context of the `<Content />` component:

    import {Content} from '@parmenion/library'

    <Content>
      <h1>Header 1</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat leo quis sem hendrerit sagittis. Cras ut efficitur sem. Morbi luctus risus sit amet nulla auctor, eu finibus nunc euismod.
      </p>

      <h2>Header 2</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat leo quis sem hendrerit sagittis. Cras ut efficitur sem. Morbi luctus risus sit amet nulla auctor, eu finibus nunc euismod.
      </p>

      <h3>Header 3</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat leo quis sem hendrerit sagittis. Cras ut efficitur sem. Morbi luctus risus sit amet nulla auctor, eu finibus nunc euismod.
      </p>

      <h4>Header 4</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat leo quis sem hendrerit sagittis. Cras ut efficitur sem. Morbi luctus risus sit amet nulla auctor, eu finibus nunc euismod.
      </p>

      <h5>Header 5</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat leo quis sem hendrerit sagittis. Cras ut efficitur sem. Morbi luctus risus sit amet nulla auctor, eu finibus nunc euismod.
      </p>

      <h6>Header 6</h6>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat leo quis sem hendrerit sagittis. Cras ut efficitur sem. Morbi luctus risus sit amet nulla auctor, eu finibus nunc euismod.
      </p>
    </Content>

# Standalone Components

Alternatively, if you're just placing a single header and no other content, you may use one of the standalone semantic components. These components do not have a margin or padding, and depend on being enclosed in a layout component such as `<Stacked />`.

    import {Stacked, PageHeader, H2, H3, H4, H5, H6} from '@parmenion/library'

    <Stacked>
      <PageHeader>This is a page header!</PageHeader>

      <H2>Header 2</H2>
      <H3>Header 3</H3>
      <H4>Header 4</H4>
      <H5>Header 5</H5>
      <H6>Header 6</H6>
    </Stacked>
