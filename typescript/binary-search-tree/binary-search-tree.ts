export class BinarySearchTree {
  public left: BinarySearchTree | null = null
  public right: BinarySearchTree | null = null
  constructor(public data: number) {}

  public insert(item: number): void {
    if (item > this.data) {
      if (this.right) {
        this.right.insert(item)
      } else {
        this.right = new BinarySearchTree(item)
      }
    } else {
      if (this.left) {
        this.left.insert(item)
      } else {
        this.left = new BinarySearchTree(item)
      }
    }
  }

  public each(callback: (data: number) => void): void {
    if (this.left) this.left.each(callback)
    callback(this.data)
    if (this.right) this.right.each(callback)
  }
}
