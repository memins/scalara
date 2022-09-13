import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CircumferenceComponent } from './circumference/circumference.component';
import { HomeComponent } from './home/home.component';
import { HypotenuseComponent } from './hypotenuse/hypotenuse.component';
import { RemainderComponent } from './remainder/remainder.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'circumference', component: CircumferenceComponent },
  { path: 'hypotenuse', component: HypotenuseComponent },
  { path: 'remainder', component: RemainderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
