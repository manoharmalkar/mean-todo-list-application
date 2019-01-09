import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ListComponent } from './component/list/list.component';
import { AddnewComponent } from './component/addnew/addnew.component';

const routes: Routes = [
  {'path': '', component: ListComponent },
  {'path': 'task', component: AddnewComponent },
  {'path': 'task/:id', component: AddnewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
