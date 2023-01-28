class ListNode<T> {
  constructor(public value: T, public prev: ListNode<T> | null, public next: ListNode<T> | null) {}
}

export class LinkedList<T> {
  private head: ListNode<T> | null = null
  private tail: ListNode<T> | null = null
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

  public pop(): T | null {
    if (!this.tail) return null

    const t = this.tail

    this.c--

    if (this.tail === this.head) {
      this.tail = null
      this.head = null
      return t.value
    }

    this.tail = this.tail.prev

    if (this.tail) {
      this.tail.next = null
    }

    return t.value
  }

  public shift(): T | null {
    if (!this.head) return null

    const h = this.head

    this.c--

    if (this.tail === this.head) {
      this.tail = null
      this.head = null
      return h.value
    }

    this.head = this.head.next

    if (this.head) {
      this.head.prev = null
    }

    return h.value
  }

  public unshift(element: T): void {
    const node = new ListNode(element, null, null)

    this.c++

    if (!this.tail && !this.head) {
      this.head = node
      this.tail = node
      return
    }

    if (!this.head) return

    node.next = this.head
    this.head.prev = node
    this.head = node
  }

  public delete(element: T): void {
    let p = this.head

    while (p && p.value !== element) {
      p = p.next
    }

    if (!p) return

    this.c--

    if (p.prev) {
      p.prev.next = p.next
    }

    if (p.next) {
      p.next.prev = p.prev
    }
  }

  public count(): number {
    return this.c
  }
}
