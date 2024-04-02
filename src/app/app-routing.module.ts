import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TablaComponent } from './tabla/tabla.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/tabla',
    pathMatch:'full'
  },
  {
    path:'tabla',
    component: TablaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
