import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    //component: HomeComponent,

    children: [
      {
        path: 'About',
        component: AboutComponent
      },{
        path: 'Home',
        component: HomeComponent
      },{
        path: 'Contact',
        component: ContactComponent
      }]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
