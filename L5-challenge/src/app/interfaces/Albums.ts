import { Artists } from './Artists';
import { Image } from './Image';

export interface Albums {
  name: string;
  playcount: number;
  url: string;
  artist: Artists;
  image: Image;
}
