import { FC, useState } from 'react'
import RichTextEditor, { EditorValue, ToolbarConfig } from 'react-rte'

interface Props {
    onChange?: ((val: string) => void) | undefined;
    initial: string
}

const TextEditor: FC<Props> = (props) => {
  const [value, setValue] = useState(
    RichTextEditor.createValueFromString(
      props.initial, 'html'
    )
  )
  const onChange = (value: EditorValue) => {
    setValue(value)
    if (props.onChange) {
      props.onChange(value.toString('html'))
    }
  }

  const toolbarConfig: ToolbarConfig = {
    // Optionally specify the groups to display (displayed in the order listed).
    display: [
      'INLINE_STYLE_BUTTONS',
      'BLOCK_TYPE_BUTTONS',
      'LINK_BUTTONS'
    ],
    INLINE_STYLE_BUTTONS: [
      { label: 'Bold', style: 'BOLD', className: 'custom-css-class' },
      { label: 'Italic', style: 'ITALIC' },
      { label: 'Underline', style: 'UNDERLINE' }
    ],
    BLOCK_TYPE_BUTTONS: [
      { label: 'UL', style: 'unordered-list-item' },
      { label: 'OL', style: 'ordered-list-item' }
    ],
    BLOCK_TYPE_DROPDOWN: [],
    BLOCK_ALIGNMENT_BUTTONS: []
  }

  return <RichTextEditor
    toolbarConfig={toolbarConfig}
    value={value}
    onChange={onChange} />
}

export default TextEditor

// INLINE_STYLE_BUTTONS: [
//     { label: 'Bold', style: 'BOLD', className: 'custom-css-class' },
//     { label: 'Italic', style: 'ITALIC' },
//     { label: 'Underline', style: 'UNDERLINE' },
//     {
//       label: 'Strikethrough',
//       style: 'STRIKETHROUGH'
//     }
//   ],
//   BLOCK_TYPE_BUTTONS: [
//     { label: 'UL', style: 'unordered-list-item' },
//     { label: 'OL', style: 'ordered-list-item' },
//     { label: 'Blockquote', style: 'blockquote' }
//   ],
//   LINK_BUTTONS: [
//     { label: 'Link', style: 'LINK' },
//     { label: 'Remove Link', style: 'REMOVE_LINK' }
//   ],
//   HISTORY_BUTTONS: [
//     { label: 'Undo', style: 'UNDO' },
//     { label: 'Redo', style: 'REDO' }
//   ]