import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-artista-tarjeta',
    templateUrl: './artista-tarjeta.component.html',
    styleUrls: ['./artista-tarjeta.component.css']
})
export class ArtistaTarjetaComponent implements OnInit {
    @Input() artista: any;
    @Input() indice: number;
    @Output() artistSelected: EventEmitter<number>;
    private searchTermSubscription: Subscription;

    constructor(private router: Router) {
        this.artistSelected = new EventEmitter();
    }
    
    ngOnInit() : void {
        console.log(this.artista);
    }

    verArtist() {
        console.log(this.indice);
        this.router.navigate( ['/artist', this.indice] );
        this.artistSelected.emit(this.indice);
    }
}
