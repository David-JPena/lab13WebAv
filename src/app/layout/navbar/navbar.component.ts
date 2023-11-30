import { Component } from '@angular/core';
import { ArtistsService} from 'src/app/services/artists.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})

export class NavbarComponent {
  searchTerm: string = '';

  constructor(private artistsService: ArtistsService) {}

  searchArtists(): void {
    // Llama al método del servicio para establecer el término de búsqueda
    this.artistsService.setSearchTerm(this.searchTerm);
    // Llama al método del servicio para buscar artistas por nombre
    this.artistsService.searchArtistsByName(this.searchTerm);
  }
}
