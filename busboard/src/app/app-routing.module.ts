import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StopsComponent } from './components/stops/stops.component';
import { StopDetailComponent } from './components/stop-detail/stop-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/stops', pathMatch: 'full' },
  { path: 'stops', component: StopsComponent },
  { path: 'stop/:id', component: StopDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
