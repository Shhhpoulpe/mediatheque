import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MediaComponent } from './media/media.component';
import { AppRoutingModule } from './app-routing.module';
import { ViewMediaComponent } from './view-media/view-media.component';
import { ViewMediaSingleComponent } from './view-media-single/view-media-single.component';

@NgModule({
  declarations: [
    AppComponent,
    MediaComponent,
    ViewMediaComponent,
    ViewMediaSingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
