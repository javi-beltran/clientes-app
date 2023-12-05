// import { Component } from '@angular/core';
// import { Cliente, Grupo } from './../cliente.model';
// import { ClientesService } from './../clientes.service';
// @Component({
//   selector: 'app-listado-clientes',
//   templateUrl: './listado-clientes.component.html',
//   styleUrls: ['./listado-clientes.component.css']
// })
// export class ListadoClientesComponent {
//   constructor(private clientesService: ClientesService) { }
// }
import { Cliente, Grupo } from './../cliente.model';
import { ClientesService } from './../clientes.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {
  clientes!: Cliente[];
  constructor(private clientesService: ClientesService) { }
  ngOnInit() {
    this.clientes = this.clientesService.getClientes();
  }
}