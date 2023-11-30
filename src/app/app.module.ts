import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* Rutas */
import { APP_ROUTING } from './app.routes';

/* Servicio */
import { ArtistsService } from './services/artists.service';

/* Componentes */
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { ArtistaTarjetaComponent } from './components/artista-tarjeta/artista-tarjeta.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarModule } from './layout/navbar/navbar/navbar.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    //NavbarComponent,
    ArtistsComponent,
    ArtistaTarjetaComponent,
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    NavbarModule
  ],
  providers: [
    ArtistsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
