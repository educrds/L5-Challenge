import { Component } from '@angular/core';

import { Search } from 'src/app/interfaces/Search';
import { SearchType } from 'src/app/interfaces/SearchType';
import { SearchHistory } from 'src/app/interfaces/SearchHistory';
import { Artists } from 'src/app/interfaces/Artists';
import { Albums } from 'src/app/interfaces/Albums';

import { SearchService } from 'src/app/services/search.service';
import { SearchStorageService } from 'src/app/services/search-storage.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
})
export class SearchComponent {
  searchResults: Artists[] | Albums[];
  searchType: SearchType[];
  search: Search;

  constructor(
    private searchService: SearchService,
    private searchStorageService: SearchStorageService
  ) {
    this.searchResults = [];
    this.searchType = [
      { id: 1, text: 'Artista' },
      { id: 2, text: 'Álbum' },
    ];
    this.search = {
      searchType: this.searchType[0],
      search: '',
    };
  }

  // Verifica tipo da pesquisa (1- Artista | 2- Album) e chama função correspondente
  verifySearchType() {
    const searchType: number = this.search.searchType.id;

    if (searchType === 1) {
      return this.searchByArtist();
    }
    this.searchByAlbum();
  }

  // Obtem dados API da pesquisa por artista
  searchByArtist() {
    this.storeSearch();
    const search: string = this.search.search;

    this.searchService.searchByArtist(search).subscribe({
      next: (data) => (this.searchResults = data),
      error: (error) => console.error(error),
      complete: () => console.log('Resultados retornados!'),
    });
    this.search.search = '';
  }

  // Obtem dados API da pesquisa por artista
  searchByAlbum() {
    this.storeSearch();
    const search: string = this.search.search;

    this.searchService.searchByAlbum(search).subscribe({
      next: (data) => (this.searchResults = data),
      error: (error) => console.error(error),
      complete: () => console.log('Resultados retornados!'),
    });
    this.search.search = '';
  }

  // Armazena dados da pesquisa do usuário no LocalStorage
  storeSearch(): void {
    const uid: number = new Date().getTime();
    const searchType: string = this.search.searchType.text;

    // Cria um novo objeto historico de pesquisa
    const search: SearchHistory = {
      search: this.search.search,
      id: uid,
      date: new Date(),
      searchType: searchType,
    };

    let searches: SearchHistory[] = this.searchStorageService.getStoredSearches();
    searches.push(search);

    const searchJSON = JSON.stringify(searches);
    // Armazena no localStorage
    localStorage.setItem('searches', searchJSON);

    // Emite evento para indicar que o historico de pesquisa foi atualizado
    this.searchStorageService.searchHistoryUpdated.emit();
  }
}
