**Simple**

    import {DatePicker, Size} from '@parmenion/library'

    initialState = {
      date: new Date('2017-01-01')
    }

    <Size height={400}>
      <DatePicker onChange={date => setState({ date })} value={state.date} />
    </Size>
