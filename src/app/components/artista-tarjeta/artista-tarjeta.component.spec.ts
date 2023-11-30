import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistaTarjetaComponent } from './artista-tarjeta.component';

describe('ArtistaTarjetaComponent', () => {
  let component: ArtistaTarjetaComponent;
  let fixture: ComponentFixture<ArtistaTarjetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtistaTarjetaComponent]
    });
    fixture = TestBed.createComponent(ArtistaTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
