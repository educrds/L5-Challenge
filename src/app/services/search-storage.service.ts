import { Injectable, EventEmitter } from '@angular/core';
import { SearchHistory } from '../interfaces/SearchHistory';

@Injectable({
  providedIn: 'root',
})

export class SearchStorageService {
  constructor() {}

  // EventEmitter para notificar sobre mudanças no histórico de pesquisa
  searchHistoryUpdated: EventEmitter<void> = new EventEmitter<void>();

  // Obtem dados do LocalStorage
  getStoredSearches(): SearchHistory[] {
    const searchesJSON = localStorage.getItem('searches');
    return searchesJSON ? JSON.parse(searchesJSON) : [];
  }

  // deleta item do LocalStorage pelo ID
  deleteStoredSearchById(item: SearchHistory): void {
    const searches: SearchHistory[] = this.getStoredSearches();
    const index: number = searches.findIndex((search) => search.id === item.id);

    if (index !== -1) {
      searches.splice(index, 1);
      localStorage.setItem('searches', JSON.stringify(searches));
    }
  }
}
