export function transform(old: { [key: string]: string[] }) {
  return Object.entries(old).reduce<{ [key: string]: number }>(
    (n, [k, values]) => ({
      ...n,
      ...values.reduce((r, v) => ({ ...r, [v.toLowerCase()]: parseInt(k) }), {}),
    }),
    {}
  )
}
