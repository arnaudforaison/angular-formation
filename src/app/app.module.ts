import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'app/shared/shared.module';

import { AdminComponent } from './admin/admin.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { FormPersonComponent } from './form-person/form-person.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    CardComponent,
    AppComponent,
    HomeComponent,
    FormPersonComponent,
    AdminComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
