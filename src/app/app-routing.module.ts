import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToDosComponent } from '../app/components/to-dos/to-dos.component'

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
