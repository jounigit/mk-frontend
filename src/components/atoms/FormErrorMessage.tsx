import { FC } from 'react'
import classNames from 'classnames'
import styled from 'styled-components'

const ErrorStyle = styled.p`
    font-size: 0.8rem;
    font-weight: 600;
    color: red;
`

export type FormErrorMessageProps = {
  children: React.ReactNode;
  className?: string;
};

export const FormErrorMessage: FC<FormErrorMessageProps> = ({
  children,
  className,
}) => (
  <p
    className={classNames(
      ErrorStyle,
      className
    )}
  >
    {children}
  </p>
)
