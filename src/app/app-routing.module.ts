import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MediaComponent } from './media/media.component';
import { ViewMediaComponent } from './view-media/view-media.component';
import { ViewMediaSingleComponent } from './view-media-single/view-media-single.component';
import { ActivatedRoute } from '@angular/router';


const routes: Routes = [
  { path: '', component: ViewMediaComponent, },
  { path: 'media/:id', component: ViewMediaSingleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }