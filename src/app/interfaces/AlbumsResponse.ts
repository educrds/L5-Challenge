import { Albums } from "./Albums";

export interface AlbumsResponse {
  topalbums: {
    album: Albums[];
  };
  results: {
    albummatches: {
      album: Albums[]
    }
  }
}
