import { Component, OnInit, Input } from '@angular/core';
import { NgZone } from '@angular/core';
import { Artist, ArtistsService } from 'src/app/services/artists.service';

@Component({
    selector: 'app-artists',
    templateUrl: './artists.component.html',
    styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
    @Input() searchText: string = '';
    artists: Artist[] = [];
    searchResults: Artist[] = [];
  

    constructor(private _artistService: ArtistsService, private ngZone: NgZone) {}

    ngOnInit(): void {
        // Obtén los resultados de búsqueda del servicio
        this.ngZone.run(() => {
            this.artists = this._artistService.getSearchResults();
            if (this.artists.length === 0) {
                this.artists = this._artistService.getArtists();
            }
        });
    }
    

   
    verArtist(index: number) {
        // Implementa la lógica para mostrar los detalles del artista según el índice.
        console.log(`Ver detalles del artista con índice ${index}`);
      }
}
