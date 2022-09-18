import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddnewComponent } from './components/addnewFlight/addnewFlight.component';
import { DeleteflightComponent } from './components/deleteflight/deleteflight.component';
import { DetailsComponent } from './components/details/details.component';
import { EditComponent } from './components/edit/edit.component';

const routes: Routes = [
  {
    path:'addnewFlight',
    component:AddnewComponent
  },
  {
    path:'deleteflight',
    component:DeleteflightComponent
  },
  {
    path:'details',
    component:DetailsComponent
  },
  {
    path:'edit',
    component:EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
