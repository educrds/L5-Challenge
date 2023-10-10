import { Component, Input } from '@angular/core';
import { Search } from 'src/app/interfaces/Search';
import { Artists } from 'src/app/interfaces/Artists';
import { Albums } from 'src/app/interfaces/Albums';
import { ListsService } from 'src/app/services/lists.service';
import { Track } from 'src/app/interfaces/Track';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../../../styles.scss'],
})
export class HomeComponent {
  @Input() searchData!: Search;
  @Input() searchResults!: Artists[] | Albums[];

  topTracks!: Track[];
  responsiveOptions: any[] | undefined;

  constructor(private listsService: ListsService) {}

  ngOnInit() {
    this.listsService.getTopTracks().subscribe({
      next: (data) => (this.topTracks = data),
      error: (error) => console.error(error),
      complete: () => console.log('Resultados retornados!'),
    });

    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 7,
        numScroll: 7,
      },
      {
        breakpoint: '1220px',
        numVisible: 5,
        numScroll: 5,
      },
      {
        breakpoint: '900px',
        numVisible: 2,
        numScroll: 2,
      },
    ];
  }
}
