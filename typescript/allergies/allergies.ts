type Allergy = 'eggs' | 'peanuts' | 'shellfish' | 'strawberries' | 'tomatoes' | 'chocolate' | 'pollen' | 'cats'

const allergies: Allergy[] = ['eggs', 'peanuts', 'shellfish', 'strawberries', 'tomatoes', 'chocolate', 'pollen', 'cats']

export class Allergies {
  private l: Allergy[]

  constructor(allergenIndex: number) {
    this.l = allergies.reduce<Allergy[]>((a, v, i) => {
      if (allergenIndex & (2 ** i)) {
        a.push(v)
      }
      return a
    }, [])
  }

  public list(): Allergy[] {
    return this.l
  }

  public allergicTo(allergen: Allergy): boolean {
    return this.l.includes(allergen)
  }
}
