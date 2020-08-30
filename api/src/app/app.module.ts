import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ApiComponent } from './api/api.component';
import { BuscarComponent } from './buscar/buscar.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [AppComponent, ApiComponent, BuscarComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
