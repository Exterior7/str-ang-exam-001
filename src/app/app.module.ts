import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SorterPipe } from './pipes/sorter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    HeroesComponent,
    FilterPipe,
    SorterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
