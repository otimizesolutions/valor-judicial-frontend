export function InputError({ message }: { message: string | undefined }) {
  return (
    <p className="text-red-500 text-xs mt-1">{message}</p>
  )
}
