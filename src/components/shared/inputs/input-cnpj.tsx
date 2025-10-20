import type { ComponentProps } from 'react'
import { useState } from 'react'
import { InputMask } from '@/components/shared/inputs/input-mask'

function removeCNPJMask(value: string): string {
  return value.replace(/\D/g, '')
}

export function InputCNPJ({
  value: rawValue,
  onChange,
  ...props
}: Omit<
  ComponentProps<typeof InputMask>,
  'format' | 'allowEmptyFormating' | 'mask' | 'onChange'
> & {
  onChange: (value: string) => void
}) {
  const [value, setValue] = useState(String(rawValue || ''))

  function handleChange(value: string) {
    setValue(value)
    onChange(removeCNPJMask(value))
  }

  return (
    <InputMask
      format="##.###.###/####-##"
      allowEmptyFormatting
      mask="_"
      value={value}
      onChange={e => handleChange(e.target.value)}
      {...props}
    />
  )
}
