import { Component, OnInit } from '@angular/core';
import { Search } from 'src/app/interfaces/Search';
import { SearchType } from 'src/app/interfaces/searchType';

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

  history: {
    id: number;
    search: string;
    searchType: string;
    date: Date;
    hour: Date;
  }[];

  ngOnInit() {}

  search: Search = {
    searchType: this.searchType[0],
    search: '',
  };
  isFirstTabActive: boolean = true;

  constructor() {
    this.history = [
      {
        id: 1,
        search: 'Seven Nation',
        searchType: 'Artista',
        date: this.date,
        hour: this.date,
      },
    ];
  }

  teste() {
    console.log(this.search);
  }
}
