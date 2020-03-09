
export interface rankItemType {
  id: number,
  name: string,
  coverImgUrl: string,
  description: string
}

export interface rankListType {
  list: Array<rankItemType>,
  code: number
}