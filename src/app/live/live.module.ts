import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LiveRoutingModule } from './live-routing.module';
import { LivePageComponent } from './components/live-page/live-page.component';


@NgModule({
  declarations: [
    LivePageComponent
  ],
  imports: [
    CommonModule,
    LiveRoutingModule
  ]
})
export class LiveModule { }
