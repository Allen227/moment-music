export interface playlistType {
  subscribers: Array<object>,
  coverImgUrl: string,
  name: string,
  description: string
}
export interface playlistDetailType {
  code: number,
  playlist: playlistType
}