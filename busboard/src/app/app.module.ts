import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StopsComponent } from './components/stops/stops.component';
import { AppRoutingModule } from './/app-routing.module';
import { StopDetailComponent } from './components/stop-detail/stop-detail.component';
import { PostcodePipe } from './pipes/postcode.pipe';
import { StopListItemComponent } from './components/stop-list-item/stop-list-item.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { ArrivalTimePipe } from './pipes/arrival-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StopsComponent,
    StopDetailComponent,
    PostcodePipe,
    StopListItemComponent,
    LoadingSpinnerComponent,
    ArrivalTimePipe
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
