export class DnDCharacter {
  public strength = DnDCharacter.generateAbilityScore()
  public dexterity = DnDCharacter.generateAbilityScore()
  public constitution = DnDCharacter.generateAbilityScore()
  public intelligence = DnDCharacter.generateAbilityScore()
  public wisdom = DnDCharacter.generateAbilityScore()
  public charisma = DnDCharacter.generateAbilityScore()
  public hitpoints = DnDCharacter.generateAbilityScore()

  public static generateAbilityScore(): number {
    const roll = () => Math.round(5 * Math.random()) + 1
    const sum = (v: number[]) => v.reduce((a, n) => a + n)
    const rolls = [roll(), roll(), roll(), roll()]
    const min = Math.min(...rolls)
    return sum(rolls) - min
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2)
  }

  public constructor() {
    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution)
  }
}
