import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { TopbarComponent } from './shared/components/topbar/topbar.component';
import { LiveModule } from './live/live.module';
import { CountryModule } from './country/country.module';
import { SummaryModule } from './summary/summary.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SummaryModule,
    CountryModule,
    LiveModule,
    HttpClientModule
  ],
  exports:[
    SidebarComponent,
    TopbarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
