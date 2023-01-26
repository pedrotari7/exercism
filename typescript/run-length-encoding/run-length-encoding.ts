export function encode(s: string): string {
  let ret = ''
  let cur = 1
  let prev = s[0] ?? ''
  for (let i = 1; i < s.length; i++) {
    if (s[i] !== prev) {
      ret += `${cur > 1 ? cur : ''}${prev}`
      cur = 1
    } else {
      cur++
    }
    prev = s[i]
  }

  return ret + `${cur > 1 ? cur : ''}${prev}`
}

export function decode(s: string): string {
  let ret = ''
  let num = ''

  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[\sa-zA-Z]/)) {
      ret += s[i].repeat(num ? parseInt(num) : 1)
      num = ''
    } else {
      num += s[i]
    }
  }

  return ret
}
