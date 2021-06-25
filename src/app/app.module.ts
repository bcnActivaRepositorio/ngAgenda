import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';
import { AuthModule } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ToDosComponent } from './components/to-dos/to-dos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { AboutComponent } from './components/about/about.component';
import { LandingComponent } from './components/landing/landing.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ToDosComponent,
    TodoItemComponent,
    AddTodoComponent,
    AboutComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // authentication auth0
    AuthModule.forRoot({
      domain: 'theclick36.eu.auth0.com',
      clientId: 'UulQK5Zj50mb3Q07a1fTyY22kiMhIoCA'
    }),
    AppRoutingModule,
    ToastrModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [HeaderComponent, FooterComponent, AddTodoComponent, AboutComponent, LandingComponent]
})
export class AppModule { }
