import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule, MatCheckboxModule,MatToolbarModule, MatMenuModule, MatTableModule, MatHeaderCellDef, MatCellDef} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { BUSLocationComponent } from './components/busbooking/busbooking.component';
import { UserComponent } from './components/UserComponent/UserComponent.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'BUSLocation',      component: BUSLocationComponent },
  { path: 'USER',      component: UserComponent },
  { path: 'forms',      component: FormsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BUSLocationComponent,
    UserComponent,
    PageNotFoundComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,
    AppRoutingModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
    HttpClientModule,
    MatMenuModule,
    MatTableModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatCellDef,
    MatHeaderCellDef
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
