import { Fragment, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

// import TextEditor from '../../../../components/editor/TextEditor'
// import MyStatefulEditor from '../../../../components/editor/Editor'

export const TestEditor = (): JSX.Element => {
  const [val, setVal] = useState('<p>Testi <strong>OK</strong></p>')

  const onChange = (value: string) => {
    console.log(value)
    setVal(value)
  }

  return (
    <Fragment>
      <h2>Editor</h2>
      <ReactQuill theme='snow' value={val} onChange={onChange} />
      <button
        onClick={() => {
          console.log(val)
          alert(val)
        }}
      >
        Submit
      </button>
      <p dangerouslySetInnerHTML={{ __html: val }}></p>
      <hr />
      <p>{val}</p>
    </Fragment>
  )
}

{/* <Fragment>
<h2>Editor</h2>
<MyStatefulEditor initial={val} onChange={onChange} />
<button
  onClick={() => {
    console.log(val)
    alert(val)
  }}
>
  Submit
</button>
<p dangerouslySetInnerHTML={{ __html: val }}></p>
<hr />
<p>{val}</p>
</Fragment> */}

{/* <Fragment>
<h2>Editor</h2>
<TextEditor initial={val}  onChange={onChange} />
<button
  onClick={() => {
    console.log(val)
    alert(val)
  }}
>
  Submit
</button>
<p dangerouslySetInnerHTML={{ __html: val }}></p>
<hr />
<p>{val}</p>
</Fragment> */}