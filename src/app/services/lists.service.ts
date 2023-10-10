import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { TracksResponse } from '../interfaces/TrackResponse';

@Injectable({
  providedIn: 'root',
})
export class ListsService {
  constructor(private http: HttpClient) {}

  getTopTracks() {
    const { apiUrl, apiKey } = environment;
    const url = `${apiUrl}?method=geo.gettoptracks&api_key=${apiKey}&country=brazil&format=json`;

    return this.http
      .get<TracksResponse>(url)
      .pipe(map((response) => response.tracks.track));
  }
}
