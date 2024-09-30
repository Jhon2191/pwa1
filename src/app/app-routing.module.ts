import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExternalPqrsComponent } from './pages/external-pqrs/external-pqrs.component';

const routes: Routes = [
  { path: '', redirectTo: 'external-pqrs', pathMatch: 'full' },
  { path: 'external-pqrs', component: ExternalPqrsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
