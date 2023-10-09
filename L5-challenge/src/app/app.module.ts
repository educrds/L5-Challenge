import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient } from '@angular/common/http';

import { TagModule } from 'primeng/tag';
import { CarouselModule } from 'primeng/carousel';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { TabsComponent } from './components/tabs/tabs.component';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent, HomeComponent, TabsComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ButtonModule,
    TabViewModule,
    CarouselModule,
    DropdownModule,
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
