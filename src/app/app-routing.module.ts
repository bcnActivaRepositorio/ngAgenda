import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToDosComponent } from '../app/components/to-dos/to-dos.component';
import { AboutComponent } from '../app/components/about/about.component';
import { FooterComponent } from '../app/footer/footer.component';
import { LandingComponent } from './components/landing/landing.component';


const routes: Routes = [
  {path: '',      component: LandingComponent},
  {path:'diary',  component: ToDosComponent},
  {path:'footer', component: FooterComponent},
  {path:'contact',component: AboutComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
