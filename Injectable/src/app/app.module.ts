import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { SuperHeroesListComponent } from './Components/super-heroes-list/super-heroes-list.component';
import { HeroDetailComponent } from './Components/hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SuperHeroesListComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
