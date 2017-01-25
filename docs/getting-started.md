To get started with the Parmenion library, you can use the following:

```js
import React from 'react';
import { ThemeProvider, defaultTheme, injectGlobalStyles, Card, Stacked, Content } from '@parmenion/library';

export default props => (
  <ThemeProvider theme={defaultTheme}>
    <MyApp />
  </ThemeProvider>
)

const MyApp = props => (
  <Stacked>
    <Card>
      Hello, world!
    </Card>
    <Card>
      What am I doing down here?
    </Card>
    <Card>
      <Content>
        <h1>Heading</h1>
        <p>
          A paragraph
        </p>
        <p>
          Another paragraph
        </p>
      </Content>
    </Card>
  </Stacked>
)

```
