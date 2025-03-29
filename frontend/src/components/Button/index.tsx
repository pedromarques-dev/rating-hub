import type { ComponentProps } from 'react'

interface ButtonProps extends ComponentProps<'button'> {}

export function Button(props: ButtonProps) {
  return (
    <button
      className="flex justify-center items-center px-5 h-12 bg-gray-100 text-blue font-semibold rounded-md w-full cursor-pointer hover:bg-indigo-500 hover:text-gray-100 transition-colors duration-300"
      {...props}
    />
  )
}
