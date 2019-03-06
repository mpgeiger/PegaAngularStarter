import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorklistComponent } from './worklist/worklist.component';
import { MPGLayoutComponent } from './mpg-layout/mpg-layout.component';
import { AccountsComponent } from './accounts/accounts.component';



const routes: Routes = [
  {
    path: 'data',
    component: WorklistComponent,
  },
  {
    path: 'mpg-layout',
    component: MPGLayoutComponent,
  },
  {
    path: 'accounts',
    component: AccountsComponent,
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
