type LAngle = {
  type: 'LAngle'
}
type Rangle = {
  type: 'RAngle'
}
type StringToken = {
  type: 'StringToken'
  value: string
}
type NumberToken = {
  type: 'NumberToken'
  value: number
}
export enum BinaryOperatorType {
  Times = '*',
  Divide = '/',
  Plus = '+',
  Minus = '-'
}
type BopToken = {
  type: 'BopToken'
  operator: BinaryOperatorType
}

export type Token = LAngle | Rangle | StringToken | NumberToken | BopToken