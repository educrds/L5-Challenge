import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { AppComponent } from './app.component';
import { DividerModule } from 'primeng/divider';
import { HomeComponent } from './pages/home/home.component';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { TabsComponent } from './components/tabs/tabs.component';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { MessagesModule } from 'primeng/messages';
import { HistoryComponent } from './pages/history/history.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, TabsComponent, HistoryComponent, SearchComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    CardModule,
    ButtonModule,
    DividerModule,
    TabViewModule,
    CarouselModule,
    DropdownModule,
    MessagesModule,
    TagModule,
    InputTextModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
