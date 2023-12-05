import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesService } from './clientes.service';
import { FormsModule } from '@angular/forms';



// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule,
//     FormsModule
//   ],
// })
// export class ClientesModule { }

// export interface Cliente {
//   id: number;
//   nombre: string;
//   cif: string;
//   direccion: string;
//   grupo: number;
// }

// export interface Grupo {
//   id: number;
//   nombre: string;
// }
// providers: [
//   ClientesService
// ]

export interface Cliente {

  id: number;

  nombre: string;

  cif: string;

  direccion: string;

  grupo: number;

}

 

export interface Grupo {

  id: number;

  nombre: string;

}
