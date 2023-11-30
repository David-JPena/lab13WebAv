import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule
import { NavbarComponent } from '../navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent],
  imports: [FormsModule,RouterModule], // Agrega FormsModule aquí
  exports: [NavbarComponent],
})
export class NavbarModule {}
