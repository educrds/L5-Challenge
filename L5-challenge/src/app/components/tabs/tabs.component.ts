import { Component } from '@angular/core';
import { Search } from 'src/app/interfaces/Search';
import { SearchType } from 'src/app/interfaces/searchType';
import { History } from 'src/app/interfaces/History';

import { SearchService } from 'src/app/services/search.service';
import { Artist } from 'src/app/interfaces/Artist';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {
  searchType: SearchType[] = [
    { id: 1, text: 'Artista' },
    { id: 2, text: 'Álbum' },
  ];

  date: Date = new Date();
  history: History[];
  isFirstTabActive: boolean = true;
  searchResults: Artist[];

  search: Search = {
    searchType: this.searchType[0],
    search: '',
  };

  constructor(private searchService: SearchService) {
    this.history = [
      {
        id: 1,
        search: 'Seven Nation',
        searchType: 'Artista',
        date: this.date,
        hour: this.date,
      },
    ];
    this.searchResults = [];
  }

  ngOnInit() {
    // this.getTopWorldArtists();
  }

  verifySearchType(){

  }

  // Obtem dados API da pesquisa por artista
  searchByArtist() {
    this.searchService.searchByArtist(this.search.search).subscribe({
      next: (data) => {
        console.log(data);
        this.searchResults = data;
      },
      error: (error) => console.error(error),
      complete: () => console.log('Deu bom!'),
    });
  }

  // Obtem dados API da pesquisa por artista
  searchByAlbum() {
    this.searchService.searchByAlbum(this.search.search).subscribe({
      next: (data) => {
        console.log(data);
        this.searchResults = data;
      },
      error: (error) => console.error(error),
      complete: () => console.log('Deu bom!'),
    });
  }

  onSearch() {
    console.log(this.search);
  }
}
