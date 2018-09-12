import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StopsComponent } from './components/stops/stops.component';
import { AppRoutingModule } from './/app-routing.module';
import { StopDetailComponent } from './components/stop-detail/stop-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    StopsComponent,
    StopDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
