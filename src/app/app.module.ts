import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HypotenuseComponent } from './hypotenuse/hypotenuse.component';
import { RemainderComponent } from './remainder/remainder.component';
import { CircumferenceComponent } from './circumference/circumference.component';
import { LayoutComponent } from './layout/layout.component';
import { StepComponent } from './step/step.component';
import { FormsModule } from '@angular/forms';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ViewComponent } from './view/view.component';
import { NextButtonComponent } from './next-button/next-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HypotenuseComponent,
    RemainderComponent,
    CircumferenceComponent,
    LayoutComponent,
    StepComponent,
    SideMenuComponent,
    ViewComponent,
    NextButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
