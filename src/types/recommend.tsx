export interface TagsType {
  name: string,
  id?: number
}

export interface recommendTagsType {
  tags: Array<TagsType>,
  code: number
}

export interface detailType {
  id: number,
  name: string,
  coverImgUrl: string,
  coverImgId: number
}

export interface recommendTagDetailType {
  playlists: Array<detailType>,
  code: number
}