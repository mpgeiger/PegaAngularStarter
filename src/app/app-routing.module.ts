import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorklistComponent } from './worklist/worklist.component';
import { MPGLayoutComponent } from './mpg-layout/mpg-layout.component';


const routes: Routes = [
  {
    path: 'data',
    component: WorklistComponent,
  },
  {
    path: 'mpg-layout',
    component: MPGLayoutComponent,
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
