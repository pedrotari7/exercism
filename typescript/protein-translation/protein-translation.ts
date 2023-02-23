const m: Record<string, string> = {
  AUG: 'Methionine',
  UUU: 'Phenylalanine',
  UUC: 'Phenylalanine',
  UUA: 'Leucine',
  UUG: 'Leucine',
  UCU: 'Serine',
  UCC: 'Serine',
  UCA: 'Serine',
  UCG: 'Serine',
  UAU: 'Tyrosine',
  UAC: 'Tyrosine',
  UGU: 'Cysteine',
  UGC: 'Cysteine',
  UGG: 'Tryptophan',
  UAA: 'STOP',
  UAG: 'STOP',
  UGA: 'STOP',
}

export function translate(s: string): string[] {
  const ret: string[] = []

  for (let i = 0; i < s.length - 2; i += 3) {
    const prot = s.slice(i, i + 3)
    if (prot in m) {
      const trans = m[prot]
      if (trans === 'STOP') return ret
      ret.push(trans)
    }
  }

  return ret
}
