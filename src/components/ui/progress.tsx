import * as ProgressPrimitive from '@radix-ui/react-progress'
import * as React from 'react'
import { cn } from '@/lib/utils' // Assumindo que você usa o utilitário cn

function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  let indicatorStyle = ''

  if (value !== undefined && value !== null) {
    if (value >= 0 && value < 30) {
      indicatorStyle = 'bg-red-500'
    }
    else if (value >= 30 && value <= 60) {
      indicatorStyle = 'bg-yellow-500'
    }
    else {
      indicatorStyle = 'bg-green-500'
    }
  }
  else {
    indicatorStyle = 'bg-gray-400'
  }

  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        // Fundo do componente (o trilho) permanece o padrão ou o passado via className
        'bg-primary/20 relative h-2 w-full overflow-hidden rounded-full',
        className,
      )}
      value={value} // Passa o valor para o Root
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={cn(
          indicatorStyle,
          'h-full w-full flex-1 transition-all',
        )}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }
