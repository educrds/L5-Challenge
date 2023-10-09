import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

import { ArtistResponse } from '../interfaces/ArtistResponse';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  searchByArtist(artist: string) {
    const { apiUrl, apiKey } = environment;

    return this.http
      .get<ArtistResponse>(
        `${apiUrl}?method=artist.search&api_key=${apiKey}&format=json&artist=${artist}`
      )
      .pipe(map((response) => response.results.artistmatches.artist));
  }
  
}
