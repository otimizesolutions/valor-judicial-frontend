import type { ComponentProps } from 'react'
import { useState } from 'react'
import { InputPattern } from '@/components/shared/inputs/input-pattern'

function removeMask(value: string): string {
  return value.replace(/\D/g, '')
}

export function InputMask({
  maskFormat,
  value: rawValue,
  onChange,
  ...props
}: Omit<
  ComponentProps<typeof InputPattern>,
  'format' | 'allowEmptyFormating' | 'mask' | 'onChange'
> & {
  onChange: (value: string) => void
  maskFormat: string
}) {
  const [value, setValue] = useState(String(rawValue || ''))

  function handleChange(value: string) {
    setValue(value)
    onChange(removeMask(value))
  }

  return (
    <InputPattern
      format={maskFormat}
      allowEmptyFormatting
      mask="_"
      value={value}
      onChange={e => handleChange(e.target.value)}
      {...props}
    />
  )
}
