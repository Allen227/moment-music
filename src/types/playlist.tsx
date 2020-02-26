export interface track {
  name: string,
  id: number,
  ar: Array<any>,
  dt: number
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

export interface songUrlType {
  code: number,
  data: Array<any>
}