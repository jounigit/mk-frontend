import { Input, Label } from '../../styles/styles'
import {
  DeepMap,
  FieldError,
  FieldValues,
  Path,
  UseFormRegister
} from 'react-hook-form'
import get from 'lodash.get'

// export type InputType = 'text' | 'email';

export type FormInputProps<TFormValues extends FieldValues> = {
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
  console.table([hasError])
  return (
    <div>
      <Label>{label}</Label>
      <Input
        defaultValue={defaultValue}
        {...(register && register(name))}
      />
      <p style={{ color: 'red' }}>{hasError}</p>
    </div>

  )
}

// export {}