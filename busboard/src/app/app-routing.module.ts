import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StopsComponent } from './components/stops/stops.component';

const routes: Routes = [
  { path: '', redirectTo: '/stops', pathMatch: 'full' },
  { path: 'stops', component: StopsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
