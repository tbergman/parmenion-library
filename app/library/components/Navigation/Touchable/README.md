# TouchableOpacity

Accepts any child and makes it "touchable" (clickable).
It handles accessibility and turning the child slightly transparent on mouse down.

**Example with `<DebugBox />`**

    import {TouchableOpacity, DebugBox} from 'library'

    initialState = { times: 0 }

    <TouchableOpacity onClick={() => setState({ times: state.times + 1 })}>
      <DebugBox label={`Press me! (${state.times} times)`} />
    </TouchableOpacity>

**Example with `<Card />`**

    import {TouchableOpacity, Card} from 'library'

    initialState = { presses: [] }

    <TouchableOpacity onClick={() => setState({ presses: [...state.presses, new Date()]})}>
      <Card heading={`Pressed ${state.presses.length} times (press me!)`}>
        <Card.ActionList>
          {state.presses.map(press => <Card.ActionList.Item label={`Pressed at ${press}`} />)}
        </Card.ActionList>
      </Card>
    </TouchableOpacity>

*Note: Just because there is a `<Card />` inside a `<TouchableOpacity />` above, doesn't mean you should actually try this at home. Please be sensible.*
