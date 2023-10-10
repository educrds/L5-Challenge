import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

import { ArtistsResponse } from '../interfaces/ArtistsResponse';
import { AlbumsResponse } from '../interfaces/AlbumsResponse';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  // Busca dados na API por artista pesquisado
  searchByArtist(artist: string) {
    let { apiUrl, apiKey } = environment;
    const url = `${apiUrl}?method=artist.search&api_key=${apiKey}&format=json&artist=${artist}`;

    return this.http
      .get<ArtistsResponse>(url)
      .pipe(map((response) => response.results.artistmatches.artist));
  }

  // Busca dados na API por album pesquisado
  searchByAlbum(album: string) {
    const { apiUrl, apiKey } = environment;
    const url = `${apiUrl}?method=album.search&api_key=${apiKey}&format=json&album=${album}`;

    return this.http
      .get<AlbumsResponse>(url)
      .pipe(map((response) => response.results.albummatches.album));
  }
}
