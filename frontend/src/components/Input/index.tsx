import type { ComponentProps } from 'react'

interface InputRootProps extends ComponentProps<'div'> {
  error?: boolean
}

export function InputRoot({ error = false, ...props }: InputRootProps) {
  return (
    <div
      data-error={error}
      className="group flex items-center gap-2 bg-blue h-12 border border-gray-100 rounded-md px-4 focus-within:border-gray-100 my-1 data-[error=true]:border-danger"
      {...props}
    />
  )
}

interface InputIconProps extends ComponentProps<'span'> {}

export function InputIcon(props: InputIconProps) {
  return (
    <span
      className="text-gray-100 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger"
      {...props}
    />
  )
}

interface InputFieldProps extends ComponentProps<'input'> {}

export function InputField(props: InputFieldProps) {
  return <input className="flex-1 outline-0 placeholder:text-gray-400" {...props} />
}
