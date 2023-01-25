export function hey(message: string): string {
  const isUpperCase = (s: string) => s === s.toUpperCase() && s !== s.toLowerCase()

  message = message.trim()
  if (message.endsWith('?') && isUpperCase(message)) return "Calm down, I know what I'm doing!"
  if (isUpperCase(message)) return 'Whoa, chill out!'
  if (message.endsWith('?')) return 'Sure.'

  return message === '' ? 'Fine. Be that way!' : 'Whatever.'
}
