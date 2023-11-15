/* eslint-disable max-len */
import { Input, Label } from '../../styles/styles'
import {
  DeepMap,
  FieldError,
  FieldValues,
  Path,
  UseFormRegister
} from 'react-hook-form'
import get from 'lodash.get'
import { ErrorMessage } from '@hookform/error-message'
import classNames from 'classnames'
// import { FormErrorMessage } from '../../components/atoms/FormErrorMessage'

// export type InputType = 'text' | 'email';

interface FormInputProps<TFormValues extends FieldValues> {
    name: Path<TFormValues>
    defaultValue?: string | number;
    label?: string;
    register?: UseFormRegister<TFormValues>;
    errors?: Partial<DeepMap<TFormValues, FieldError>>;
}

export const FormInput = <TFormValues extends Record<string, unknown>>({
  name,
  defaultValue,
  label,
  register,
  errors,
}: FormInputProps<TFormValues>): JSX.Element => {
  const errorMessages = get(errors, name)
  const hasError = !!(errors && errorMessages)

  // const errorMessages = errors[name]
  // const hasError = !!(errors && errorMessages)

  // errors && console.table([errorMessages])
  return (
    (<div>
      <Label>{label}</Label>
      <Input
        defaultValue={defaultValue}
        aria-invalid={hasError}
        className={classNames({
          'transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-50 border-red-600 hover:border-red-600 focus:border-red-600 focus:ring-red-600':
            hasError,
        })}
        {...(register && register(name))}
      />
      {/* {hasError &&
      <p style={{ color: 'red' }}>{errorMessages.message}</p>
      } */}
      {hasError &&
            <ErrorMessage
              errors={errors}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              name={name as any}
              render={({ message }) => (
                (<p style={{ color: 'red' }}>{message}</p>)
              // <FormErrorMessage className="mt-1">{message}</FormErrorMessage>
              )}
            />
      }
    </div>)
  )
}
