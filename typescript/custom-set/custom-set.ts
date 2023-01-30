const find = <T>(haystack: T[], needle: T): number => {
  let low = 0
  let high = haystack.length - 1

  while (high >= low) {
    const mid = Math.round((high + low) / 2)
    const val = haystack[mid]

    if (val === needle) return mid

    if (val >= needle) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  return -1
}

export class CustomSet<T> {
  private elements: T[] = []

  constructor(initial?: T[]) {
    initial?.forEach((el) => this.add(el))
  }

  empty(): boolean {
    return this.elements.length === 0
  }

  contains(element: T): boolean {
    return find(this.elements, element) >= 0
  }

  add(element: T): CustomSet<T> {
    if (!this.contains(element)) {
      this.elements.push(element)
      this.elements.sort()
    }
    return this
  }

  subset(other: CustomSet<T>): boolean {
    return this.elements.every((el) => other.contains(el))
  }

  disjoint(other: CustomSet<T>): boolean {
    return this.elements.every((el) => !other.contains(el))
  }

  eql(other: CustomSet<T>): boolean {
    if (this.elements.length !== other.elements.length) return false
    return this.elements.every((el, i) => el === other.elements[i])
  }

  union(other: CustomSet<T>): CustomSet<T> {
    return new CustomSet<T>([...this.elements, ...other.elements])
  }

  intersection(other: CustomSet<T>): CustomSet<T> {
    return new CustomSet<T>(this.elements.filter((el) => other.contains(el)))
  }

  difference(other: CustomSet<T>): CustomSet<T> {
    return new CustomSet<T>(this.elements.filter((el) => !other.contains(el)))
  }
}
