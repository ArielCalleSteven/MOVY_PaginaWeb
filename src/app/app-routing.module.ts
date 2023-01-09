import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PaginaComponent } from './pagina/pagina.component';

const routes: Routes = [
  {
    path:'', component: LoginComponent

  },
  {
    path:'pag2', component: PaginaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
