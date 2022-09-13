import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HypotenuseComponent } from './hypotenuse/hypotenuse.component';
import { RemainderComponent } from './remainder/remainder.component';
import { CircumferenceComponent } from './circumference/circumference.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HypotenuseComponent,
    RemainderComponent,
    CircumferenceComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
