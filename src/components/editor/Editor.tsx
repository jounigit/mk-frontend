import { Component, } from 'react'
import RichTextEditor, { EditorValue } from 'react-rte'

interface Props {
    onChange?: ((val: string) => void) | undefined;
    initial: string
}

export default class MyStatefulEditor extends Component<Props> {
  state = {
    value: RichTextEditor.createValueFromString(this.props.initial, 'html')
  }

  // initial = createRef()

  onChange = (value: EditorValue) => {
    this.setState({ value })
    if (this.props.onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      this.props.onChange(
        value.toString('html')
      )
    }
  }

  // componentDidMount(): void {
  //   if (this.props.initial) {
  //     console.log(this.props.initial)
  //     this.onChange(
  //       RichTextEditor.createValueFromString(this.props.initial, 'html')
  //     )
  //   }
  // }

  render () {
    return (
      <RichTextEditor
        value={this.state.value}
        onChange={this.onChange}
      />
    )
  }
}