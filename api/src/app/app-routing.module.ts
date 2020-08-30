import { NgModule } from '@angular/core';
import { ApiComponent } from './api/api.component';
import { BuscarComponent } from './buscar/buscar.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: BuscarComponent },
  { path: 'resultados/:q', component: ApiComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
