import { Injectable } from '@angular/core';

@Injectable()
export class ArtistsService {

    private artists: Artist[] = [
        {
            nombre: "AC/DC",
            biografia: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius sunt, ratione, vitae iusto tenetur dolorum temporibus laboriosam optio officiis hic quae nihil non quia labore deserunt neque sequi expedita ut!",
            img: "assets/img/ac-dc.jpg",
            aparicion: "1980-11-05",
            genero: "Rock",
            idioma: "Inglés"
        },
        {
            nombre: "KISS",
            biografia: "Temporibus laboriosam optio officiis hic quae nihil non quia labore deserunt neque sequi expedita ut!",
            img: "assets/img/kiss.jpg",
            aparicion: "1970-11-05",
            genero: "Rock",
            idioma: "Inglés"
        },
        {
            nombre: "Guns 'n Roses",
            biografia: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius sunt, ratione, vitae iusto tenetur dolorum tlit. Eius sunt, ratione, vitae iusto tenetur dolorum temporibus laboriosam optio officiis hic quae nihil non quia labore deserunt neque sequi expedita ut!",
            img: "assets/img/gnr.jpg",
            aparicion: "1982-11-05",
            genero: "Rock",
            idioma: "Inglés"
        },
        {
            nombre: "Soda Stereo",
            biografia: "Tit amet consectetur adipisicing elit. Eius sunt emporibus laboriosam optio officiis hic quae nihil non quia labore deserunt neque sequi expedita ut!",
            img: "assets/img/soda.jpg",
            aparicion: "1985-11-05",
            genero: "Rock",
            idioma: "Español"
        },
        {
            nombre: "Queen",
            biografia: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius sunt, temporibus laboriosam optio officiis hic quae nihil non quia labore deserunt neque sequi expedita ut!",
            img: "assets/img/queen.jpg",
            aparicion: "1972-11-05",
            genero: "Rock",
            idioma: "Inglés"
        },
        {
            nombre: "Metallica",
            biografia: "Eius sunt, ratione, vitae iusto tenetur dolorum temporibus. Eius sunt, ratione, vitae iusto tenetur dolorum temporibus temporibus laboriosam optio officiis hic quae nihil non quia labore deserunt neque sequi expedita ut!",
            img: "assets/img/metallica.jpg",
            aparicion: "1970-11-05",
            genero: "Rock",
            idioma: "Inglés"
        },
        {
            nombre: "Hombres G",
            biografia: "Labore deserunt neque sequi expedita ut temporibus laboriosam optio officiis hic quae nihil non quia labore deserunt neque sequi expedita ut!",
            img: "assets/img/hombresG.jpg",
            aparicion: "1989-11-05",
            genero: "Rock",
            idioma: "Español"
        },
        {
            nombre: "Enanitos verdes",
            biografia: "Quae nihil non quia labore deserunt neque sequi expedita ut Temporibus laboriosam optio officiis hic quae nihil non quia labore deserunt neque sequi expedita ut!",
            img: "assets/img/enanitosVerdes.jpg",
            aparicion: "1979-11-05",
            genero: "Rock",
            idioma: "Español"
        },
        {   
            nombre: "Prisioneros",
            biografia: "Qoptio officiis hic quae nihil Tit amet consectetur adipisicing elit. Eius sunt emporibus laboriosam optio  uae nihil non quia labore deserunt neque sequi expedita ut Temporibus laboriosam optio officiis hic quae nihil non quia labore deserunt neque sequi expedita ut!",
            img: "assets/img/prisioneros.jpg",
            aparicion: "1983-11-05",
            genero: "Rock",
            idioma: "Español"
        },
    ];

    getArtists(): Artist[] {
        return this.artists;
    }


    getArtist = (id: any) => this.artists[id];
    
    private searchTerm: string = '';
    private searchResults: Artist[] = [];
    
    setSearchTerm(term: string): void {
        this.searchTerm = term;
    }
    getSearchTerm(): string {
        return this.searchTerm;
    }

    // Método para buscar artistas por nombre
    getSearchResults(): Artist[] {
        return this.searchResults;
    }

    // Método para buscar artistas por nombre
    searchArtistsByName(searchTerm: string): void {
        this.searchTerm = searchTerm.toLowerCase();
        this.searchResults = this.artists.filter(artist => artist.nombre.toLowerCase().includes(this.searchTerm));
    }

    constructor() {
        console.log('Servicio listo !!!');
    }
}

export interface Artist {
    nombre: string;
    biografia: string;
    img: string;
    aparicion: string;
    genero: string;
    idioma: string;
    indice?:number;
}