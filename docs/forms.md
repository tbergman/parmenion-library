There is a simple API available to construct various different form layouts and inputs.

**Simple vertical* form**

    import {Form, InputText, Textarea, Radio, Checkbox, RadioGroup, CheckboxGroup} from '@parmenion/library'

    initialState = { chooseOne: 'no', horizontal: false }

    <Form horizontal={state.horizontal}>
      <Form.Group label="Your name">
        <Form.Field>
          <InputText placeholder="First name" />
        </Form.Field>
        <Form.Field>
          <InputText placeholder="Last name" />
        </Form.Field>
      </Form.Group>

      <Form.Field label="Gender">
        <Select
          placeholder="Choose one"
          items={[
            { id: 0, name: 'Male' },
            { id: 1, name: 'Female' }
          ]}
        />
      </Form.Field>

      <Form.Field label={`Choose one (you chose ${state.chooseOne})`}>
        <RadioGroup value={state.chooseOne} onChange={value => setState({ chooseOne: value })}>
          <Radio value="yes">Yes</Radio>
          <Radio value="no">No</Radio>
        </RadioGroup>
      </Form.Field>

      <Form.Field label="What are your interests?">
        <CheckboxGroup>
          <Checkbox>Film</Checkbox>
          <Checkbox>Politics</Checkbox>
          <Checkbox>Technology</Checkbox>
          <Checkbox>Other</Checkbox>
        </CheckboxGroup>
      </Form.Field>

      <Form.Field label="Do you like horizontal forms?">
        <CheckboxGroup>
          <Checkbox checked={state.horizontal} onChange={() => setState({ horizontal: !state.horizontal })}>Yeah I love them</Checkbox>
        </CheckboxGroup>
      </Form.Field>

      <Form.Field label="Tell us more about you">
        <Textarea placeholder="Actually don't bother" />
      </Form.Field>
    </Form>

A form can be made horizontal by simply supplying the `horizontal` prop to the root `<Form />` component. Just so you know, when asked, you love horizontal forms.


** Spoiler: it's not always vertical*
