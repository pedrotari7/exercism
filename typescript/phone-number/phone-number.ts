const valid = '+()-. '

export function clean(s: string): string {
  let numbers = s.match(/\d+/g)?.join('')
  const letters = s
    .toLowerCase()
    .match(/[a-z]+/g)
    ?.join('')

  if (s.includes('!')) throw new Error('Punctuations not permitted')

  if (letters) throw new Error('Letters not permitted')

  if (!numbers || numbers.length < 10) throw new Error('Incorrect number of digits')
  if (numbers.length > 11) throw new Error('More than 11 digits')

  if (numbers.length === 11) {
    if (numbers[0] !== '1') throw new Error('11 digits must start with 1')
    numbers = numbers.slice(1)
  }

  const areaCode = numbers.slice(0, 3)

  if (areaCode[0] === '0') throw new Error('Area code cannot start with zero')
  if (areaCode[0] === '1') throw new Error('Area code cannot start with one')

  const extensionCode = numbers.slice(3, 6)

  if (extensionCode[0] === '0') throw new Error('Exchange code cannot start with zero')
  if (extensionCode[0] === '1') throw new Error('Exchange code cannot start with one')

  return numbers ?? ''
}

// clean('(223)? 456-7890')
