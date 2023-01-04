
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { TodoListComponent } from './todo-list/todo-list.component';
import { LoginComponent } from './login/login.component';

import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './landing/landing.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { SettingComponent } from './setting/setting.component';
import { LogoutComponent } from './logout/logout.component';
import { HelpcenterComponent } from './helpcenter/helpcenter.component';



@NgModule({
  declarations: [
    AppComponent,
    //TodoListComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    LandingComponent,
    SignUpComponent,
    HeaderComponent,
    CardComponent,
    TableComponent,
    SettingComponent,
    LogoutComponent,
    HelpcenterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
