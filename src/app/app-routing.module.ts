import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaCuotasComponent } from './lista-cuotas/lista-cuotas.component';
import { ListaLeasingsComponent } from './lista-leasings/lista-leasings.component';

const routes: Routes = [
  {path : 'cuotas' , component : ListaCuotasComponent},
  {path : 'leasing',  component : ListaLeasingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ ListaCuotasComponent, ListaLeasingsComponent];
