import { FC, InputHTMLAttributes } from 'react'
import { Input } from '../../styles/styles'
import { FieldValues, UseFormRegister } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    fieldName: string;
    defaultValue?: string;
    register: UseFormRegister<FieldValues>;
    // errors?: string;
}

export const TextInput: FC<InputProps> = ({
  fieldName,
  defaultValue,
  register,
//   errors,
}) => {
  return (
    <div>
      <Input
        defaultValue={defaultValue}
        {...register(fieldName)}
      />
      {/* {errors.fieldName} */}
    </div>

  )
}

// export {}