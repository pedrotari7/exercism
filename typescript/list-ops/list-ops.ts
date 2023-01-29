class ListNode<T> {
  constructor(public value: T, public prev: ListNode<T> | null, public next: ListNode<T> | null) {}
}

export class LinkedList<T> {
  public head: ListNode<T> | null = null
  public tail: ListNode<T> | null = null
  private c = 0

  public push(element: T): void {
    const node = new ListNode(element, null, null)

    this.c++

    if (!this.tail && !this.head) {
      this.head = node
      this.tail = node
      return
    }

    if (!this.tail) return

    node.prev = this.tail
    this.tail.next = node
    this.tail = node
  }

  public count(): number {
    return this.c
  }
}

type UnionType<A extends any[]> = A[number]
type AccumType<K, L> = (acc: K, el: L) => K

export class List<T> {
  private list: LinkedList<T>

  constructor() {
    this.list = new LinkedList<T>()
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  public static create<K extends any[]>(...values: K) {
    // Do *not* construct any array literal ([]) in your solution.
    // Do *not* construct any arrays through new Array in your solution.
    // DO *not* use any of the Array.prototype methods in your solution.

    // You may use the destructuring and spreading (...) syntax from Iterable.

    const l = new List<K extends any[] ? UnionType<K> : K>()

    for (const v of values) {
      l.list.push(v)
    }

    return l
  }

  public forEach(func: (e: T) => void, rev = false): void {
    let p = rev ? this.list.tail : this.list.head

    while (p) {
      func(p.value)
      p = rev ? p.prev : p.next
    }
  }

  public append<K>(b: List<K>): List<T | K> {
    const newList = new List<T | K>()

    this.forEach((el) => {
      newList.list.push(el)
    })

    b.forEach((el) => {
      newList.list.push(el)
    })
    return newList
  }

  public concat<K>(b: List<K>): List<T | K> {
    const newList = new List<T | K>()

    this.forEach((el) => {
      newList.list.push(el)
    })

    const flatten = (el: K | List<K>): void => {
      if (el instanceof List) {
        el.forEach(flatten)
      } else {
        newList.list.push(el)
      }
    }

    b.forEach(flatten)

    return newList
  }

  public reverse(): List<T> {
    const newList = new List<T>()

    this.forEach((el) => {
      newList.list.push(el)
    }, true)

    return newList
  }

  public map<K>(func: (e: T) => K): List<K> {
    const newList = new List<K>()

    this.forEach((el) => {
      newList.list.push(func(el))
    })

    return newList
  }

  public filter(func: (e: T) => boolean): List<T> {
    const newList = new List<T>()

    this.forEach((el) => {
      if (func(el)) newList.list.push(el)
    })

    return newList
  }

  private fold<K>(func: AccumType<K, T>, initialValue: K, rev = false): K {
    let accum = initialValue

    this.forEach((el) => {
      accum = func(accum, el)
    }, rev)

    return accum
  }

  public foldl<K>(func: AccumType<K, T>, initialValue: K): K {
    return this.fold(func, initialValue)
  }

  public foldr<K>(func: AccumType<K, T>, initialValue: K): K {
    return this.fold(func, initialValue, true)
  }

  public length(): number {
    return this.list.count()
  }
}
