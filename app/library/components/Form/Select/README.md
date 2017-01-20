    import {Select, Size, Group, Label, Stacked} from 'library'
    import {counties} from './counties'

    <Size height={550}>
      <Stacked>
        <Group label={<Label>Normal:</Label>} isHorizontal>
          <Select
            value={state.value}
            onChange={value => setState({ value })}
            items={[
              { id: 0, name: 'Option 1' },
              { id: 1, name: 'Option 2' },
              { id: 2, name: 'Option 3' },
              { id: 3, name: 'Option 4' },
            ]}
          />
        </Group>

        <Group label={<Label>Autocomplete:</Label>} isHorizontal>
          <Select
            isAutocomplete
            value={state.county}
            onChange={county => setState({ county })}
            items={
              counties.map((county, index) =>
                ({ id: index, name: county })
              )
            }
          />
        </Group>

        <Group label={<Label>With placeholder:</Label>} isHorizontal>
          <Select
            value={state.value}
            onChange={value => setState({ value })}
            placeholder="This is a placeholder"
            items={[
              { id: 0, name: 'Option 1' },
              { id: 1, name: 'Option 2' },
              { id: 2, name: 'Option 3' },
              { id: 3, name: 'Option 4' },
            ]}
          />
        </Group>

        <Group label={<Label>Small:</Label>} isHorizontal>
          <Select
            value={state.value}
            onChange={value => setState({ value })}
            isSmall
            items={[
              { id: 0, name: 'Option 1' },
              { id: 1, name: 'Option 2' },
              { id: 2, name: 'Option 3' },
              { id: 3, name: 'Option 4' },
            ]}
          />
        </Group>
      </Stacked>
    </Size>
