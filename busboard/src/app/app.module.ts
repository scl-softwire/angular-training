import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StopDetailComponent } from './components/stop-detail/stop-detail.component';
import { StopsComponent } from './components/stops/stops.component';

@NgModule({
  declarations: [
    AppComponent,
    StopDetailComponent,
    StopsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
