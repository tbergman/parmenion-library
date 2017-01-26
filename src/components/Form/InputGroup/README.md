**Left**

    import {InputGroup, InputText} from '@parmenion/library'

    <InputGroup start="Hi">
      <InputText />
    </InputGroup>

**Right**

    import {InputGroup, InputText} from '@parmenion/library'

    <InputGroup end="Bye">
      <InputText />
    </InputGroup>

**Both**

    import {InputGroup, InputText} from '@parmenion/library'

    <InputGroup start="Hi" end="Bye">
      <InputText />
    </InputGroup>

**Multiple inputs**

    import {InputGroup, InputText, Select, Size} from '@parmenion/library'

    <Size height={250}>
      <InputGroup start="Hi" end="Bye">
        <InputText placeholder="One" />
        <InputText placeholder="Two" />
        <InputText placeholder="Three"/>
        <Select
          placeholder="Select"
          items={[
            { id: 0, name: 'Option 1' },
            { id: 1, name: 'Option 2' },
            { id: 2, name: 'Option 3' },
            { id: 3, name: 'Option 4' },
          ]}
        />
      </InputGroup>
    </Size>
