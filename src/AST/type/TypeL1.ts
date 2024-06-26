type UnitType = {
  type: 'UnitType'
}

type BoolType = {
  type: 'BoolType'
}

type StringType = {
  type: 'StringType'
}

type IntType = {
  type: 'IntType'
}

type ParenType = {
  type: 'ParenType',
  t: TypeL4
}

type ListType = {
  type: 'ListType',
  t: TypeL4
}

type TypeVar = {
  type: 'TypeVar',
  name: string
}

type TypeL1 = UnitType | BoolType | StringType | IntType | ParenType | TypeVar | ListType