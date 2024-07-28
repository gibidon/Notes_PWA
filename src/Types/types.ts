export type NonEmptyString<T extends string> = T extends '' ? never : T //user can't be empty

export type TUser = NonEmptyString<string>

