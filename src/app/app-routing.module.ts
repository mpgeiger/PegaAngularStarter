import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeTabComponent } from './home-tab/home-tab.component';
import { MaintabsComponent } from './maintabs/maintabs.component';
import { WorklistComponent } from './worklist/worklist.component';
import { MPGLayoutComponent } from './mpg-layout/mpg-layout.component';
import { AccountsComponent } from './accounts/accounts.component';



const routes: Routes = [
  {
    path: 'data',
    component: WorklistComponent,
  },
  {
    path: '',
    component: MaintabsComponent,
  },
  {
    path: 'maintabs',
    component: MaintabsComponent,
  },
  {
    path: 'hometab',
    component: HomeTabComponent,
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
