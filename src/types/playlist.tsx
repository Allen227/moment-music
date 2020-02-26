export interface track {
  name: string
}

export interface playlistType {
  tracks: Array<track>,
  coverImgUrl: string,
  name: string,
  description: string
}
export interface playlistDetailType {
  code: number,
  playlist: playlistType
}