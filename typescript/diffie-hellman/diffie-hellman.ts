const isPrime = (n: number): boolean => {
  if (n <= 0 || isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false
  for (var i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false
  return true
}

export class DiffieHellman {
  constructor(private p: number, private g: number) {
    if (!isPrime(this.p) || !isPrime(this.g)) throw new Error('Input not prime')
  }

  public getPublicKey(privateKey: number): number {
    if (privateKey <= 1 || privateKey >= this.p) throw new Error('private key out of bounds')

    return Math.pow(this.g, privateKey) % this.p
  }

  public getSecret(theirPublicKey: number, myPrivateKey: number): number {
    return Math.pow(theirPublicKey, myPrivateKey) % this.p
  }
}
