import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FactsComponentComponent } from './components/facts-component/facts-component.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { StartComponent } from './components/starti-component/start.component';

@NgModule({
  declarations: [AppComponent, FactsComponentComponent, NotFoundComponent, StartComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
