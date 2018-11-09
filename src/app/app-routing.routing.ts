import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeIntelComponent } from './users/intel/home-intel/home-intel.component';
import { PageNotFoundComponent } from './users/page-not-found/page-not-found.component';
import { HomePageComponent } from './users/home-page/home-page.component';
import { DetailsIntelPcComponent } from './users/intel/details-pc/details-pc.component';
import { AmdComponent } from './users/amd/amd.component';



const routes: Routes =[
    {path:'',component:HomePageComponent,pathMatch:'full'},
    {path: 'intel',component: HomeIntelComponent },
    {path: 'intel/details/:id',component:DetailsIntelPcComponent},
    {path:'amd', component:AmdComponent},
    {path:'**',component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ],
})
export class AppRoutingModule { }
