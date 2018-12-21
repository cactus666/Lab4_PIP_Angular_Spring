import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import {Routes, RouterModule} from '@angular/router';

import { AppComponent }   from './app.head';
import { TableComponent }   from './app.table';
import { FormComponent }   from './app.form';
import { AuthComponent }   from './app.authorization';

const appRoutes: Routes =[
    { path: '', component: AuthComponent},
    { path: 'home', component: AuthComponent},
    { path: 'main', component: FormComponent},
    { path: '**', component: FormComponent }
];

@NgModule({
    imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
    declarations: [ AppComponent, TableComponent, FormComponent, AuthComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }