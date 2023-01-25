export class GradeSchool {
  private students: { [k: string]: number } = {}

  roster(): { [k: number]: string[] } {
    return [...new Set(Object.values(this.students)).values()].reduce((r, grade) => {
      r[grade] = this.grade(grade)

      return r
    }, {} as { [k: number]: string[] })
  }

  add(name: string, grade: number): void {
    this.students[name] = grade
  }

  grade(grade: number): string[] {
    return Object.entries(this.students)
      .filter(([_, g]) => g === grade)
      .map(([name]) => name)
      .sort()
  }
}
