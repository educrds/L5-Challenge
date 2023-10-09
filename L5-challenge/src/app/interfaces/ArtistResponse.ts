import { Artist } from "./Artist";

export interface ArtistResponse {
  artists: {
    artist: Artist[];
  };
  results: {
    artistmatches: {
      artist: Artist[]
    }
  }
}
