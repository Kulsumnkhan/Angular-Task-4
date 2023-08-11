import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormChartComponent } from './form-chart/form-chart.component';
import { chartDirective } from './directive/chart.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormChartComponent,
    chartDirective 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
