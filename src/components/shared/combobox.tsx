'use client'

import { Check, ChevronDown } from 'lucide-react'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'

export function Combobox({ label, options = [], value, onChange }) {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className="w-full" disabled={options.length === 0}>
        <Button
          role="combobox"
          aria-expanded={open}
          className="justify-between"
        >
          <p className="font-lato font-light">
            {value
              ? options.find(option => option === value)
              : '-'}
          </p>
          <ChevronDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="border p-0">
        <Command className="">
          <CommandInput placeholder={`Pesquisar ${label.toLowerCase()}...`} />
          <CommandList>
            <CommandEmpty>{`${label} não encontrado`}</CommandEmpty>
            <CommandGroup>
              {options.map(option => (
                <CommandItem
                  key={option}
                  value={option}
                  onSelect={(currentValue) => {
                    onChange(currentValue === value ? '' : currentValue)
                    setOpen(false)
                  }}
                >
                  {option}
                  <Check
                    className={cn(
                      'ml-auto',
                      value === option ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
