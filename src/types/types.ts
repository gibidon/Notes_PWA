type NonEmptyString<T extends string> = T extends '' ? never : T //user can't be empty

export type TUser = NonEmptyString<string>

export interface INote {
  id: number
  title: string
  body: string
  createdAt: Date
}
