import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AltaClienteComponent } from './clientes/alta-cliente/alta-cliente.component';
// import { ClientesModule } from './clientes/cliente.model';
import { ClientesModule } from './clientes/clientes.module';
// import { ListadoClientesComponent } from './clientes/listado-clientes/listado-clientes.component';


@NgModule({
  declarations: [
    AppComponent,
    // AltaClienteComponent,
    // ListadoClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientesModule,
    // FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// exports: [
//   AltaClienteComponent,
//   ListadoClientesComponent
// ]