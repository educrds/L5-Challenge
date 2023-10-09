import { Component, Input } from '@angular/core';
import { Search } from 'src/app/interfaces/Search';
import { Artist } from 'src/app/interfaces/Artist';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../../../styles.scss'],
})
export class HomeComponent {
  @Input() searchData!: Search;
  @Input() searchResults!: (Artist[] || Album[]);

  // constructor ---> inicializaçao de variaveis e injecao de dependencias
  constructor() {}

  // ngOnInit() {
  //   console.log(environment);
  // }

  onSearch(): void {
    console.log(this.searchData);
  }
}
