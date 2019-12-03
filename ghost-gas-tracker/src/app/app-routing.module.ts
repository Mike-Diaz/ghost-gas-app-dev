import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// const authUrl = 'localhost:3000/auth/google'

const routes: Routes = [
  // {
  //   path: '/auth/google',
  //   url: authUrl
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
