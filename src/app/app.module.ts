import { LiveModule } from './live/live.module';
import { CountryModule } from './country/country.module';
import { SummaryModule } from './summary/summary.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { TopbarComponent } from './shared/components/topbar/topbar.component';

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
    LiveModule
  ],
  exports:[
    SidebarComponent,
    TopbarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
