import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routes } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { OurprogramsComponent } from './ourprograms/ourprograms.component';
import { IllumeComponent } from './illume/illume.component';
import { WhykidzeeComponent } from './whykidzee/whykidzee.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OurprogramsComponent,
    IllumeComponent,
    WhykidzeeComponent,
    FooterComponent
  ],
  imports: [
    routes,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
