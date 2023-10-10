import { Artists } from "./Artists";

export interface ArtistsResponse {
  artists: {
    artist: Artists[];
  };
  results: {
    artistmatches: {
      artist: Artists[]
    }
  }
}
