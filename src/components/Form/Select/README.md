    import {Select, Size, Form, Label, Stacked} from '@parmenion/library'
    import {counties} from './counties'

    <Size height={550}>
      <Form horizontal>
        <Form.Field label="Normal:">
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
        </Form.Field>

        <Form.Field label="Autocomplete:">
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
        </Form.Field>

        <Form.Field label="With placeholder:">
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
        </Form.Field>

        <Form.Field label="Small:">
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
        </Form.Field>

        <Form.Field label="With long value:">
          <Select
            value={0}
            items={[
              { id: 0, name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis elit nec dolor auctor ultrices. Suspendisse est velit, tempus eu tempus nec, consectetur sit amet lacus. Proin eu justo at tellus placerat egestas. Nunc eu ex odio. Vivamus cursus eros ut pulvinar volutpat. Nulla facilisi. Integer placerat vulputate turpis efficitur imperdiet. Praesent sapien tellus, pharetra condimentum maximus eu, ultrices sed nunc. Vestibulum pellentesque tortor sodales ligula tristique venenatis. Aenean eget ligula sed libero imperdiet tempus.' },
            ]}
          />
        </Form.Field>
      </Form>
    </Size>
