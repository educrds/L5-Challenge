import { Artists } from "./Artists";
import { Image } from "./Image";

export interface Track {
  name: string;
  duration: string;
  listeners: string;
  image: Image;
  artist: Artists;
}