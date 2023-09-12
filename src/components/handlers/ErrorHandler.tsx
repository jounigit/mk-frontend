import { HandlingWrapper } from '../../styles/styles'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'

interface Props {
    error?: Error;
}

export function ErrorHandler({ error }: Props) {
  return (
    <HandlingWrapper brColor='red'>
      <FaTimes color='red' />
      <h4>An error occurred:</h4>
      <p>{error && error.message}</p>

      <p>{error && error.name}</p>
      <Link to='/'>Go back to the homepage</Link>
    </HandlingWrapper>
  )
}