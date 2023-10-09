import { Component, Input } from '@angular/core';

import { Search } from 'src/app/interfaces/Search';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../../../styles.scss'],
})
export class HomeComponent {
  @Input() searchData!: Search;

  // constructor ---> inicializaçao de variaveis e injecao de dependencias
  constructor() {}

  teste(): void {
    console.log('oi', this.searchData);
  }
}
