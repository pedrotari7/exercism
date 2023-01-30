export class BufferFullError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'BufferFullError'
  }
}

export class BufferEmptyError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'BufferEmptyError'
  }
}

export default class CircularBuffer<T> {
  private elements: T[] = []

  constructor(private initial: number) {}

  private get isFull(): boolean {
    return this.elements.length === this.initial
  }

  private get isEmpty(): boolean {
    return this.elements.length === 0
  }

  write(value: T): void {
    if (this.isFull) throw new BufferFullError('buffer full')
    this.elements.push(value)
  }

  read(): T | never {
    if (this.isEmpty) throw new BufferEmptyError('buffer empty')
    return this.elements.shift()!
  }

  forceWrite(value: T): void {
    if (this.isFull) this.elements.shift()

    this.write(value)
  }

  clear(): void {
    this.elements = []
  }
}
