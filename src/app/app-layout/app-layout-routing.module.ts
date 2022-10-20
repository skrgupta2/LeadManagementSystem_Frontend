import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './app-layout.component';
import { DashboardComponent } from './content/dashboard/dashboard.component';

const routes: Routes = [{path:'',component:AppLayoutComponent,
children:[
  {path:'',component:DashboardComponent}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppLayoutRoutingModule { }
