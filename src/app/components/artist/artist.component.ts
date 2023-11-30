import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistsService } from 'src/app/services/artists.service';

@Component({
    selector: 'app-artist',
    templateUrl: './artist.component.html',
    styleUrls: ['./artist.component.css']
})
export class ArtistComponent {
    artist: any = {};

    constructor(
        private activatedRoute: ActivatedRoute,
        private _artistService: ArtistsService
    ) {
        this.activatedRoute.params.subscribe( params => {
            this.artist = this._artistService.getArtist(params['id']);
        })
    }

    ngOnInit(): void {
    }
}
