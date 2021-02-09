import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToDosComponent } from '../app/components/to-dos/to-dos.component';
import { AboutComponent } from '../app/components/about/about.component';
import { FooterComponent } from '../app/footer/footer.component';
import { LandingComponent } from './components/landing/landing.component';


const routes: Routes = [
  {path: '', component: LandingComponent},
  {path:'dietary', component: ToDosComponent},
  {path:'footer', component: FooterComponent},
  {path:'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
