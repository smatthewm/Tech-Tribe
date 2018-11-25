import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BUSLocationComponent } from './components/busbooking/busbooking.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/UserComponent/UserComponent.component';
import { FormsComponent } from './forms/forms.component';
const routes: Routes = [  
  {
    path: '',
    //component: HomeComponent,

    children: [
      {
        path: 'BUS',
        component: BUSLocationComponent
      },{
        path: 'Home',
        component: HomeComponent
      },{
        path: 'User',
        component: UserComponent
      }//,
      // {
      //   path: 'User',
      //   component: UserComponent
      // },
      // {
      //   path: 'Forms',
      //   component: FormsComponent
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
