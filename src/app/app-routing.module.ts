import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LandingComponent } from './landing/landing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path:'',pathMatch:'full',component:LandingComponent },
  { path: 'login', component: LoginComponent },
  { path:'sign-up',component:SignUpComponent},
  { path:'home',component:HomeComponent},
  { path: '**', component: LoginComponent }, // 萬用路徑，路由沒有比對到，永遠會執行
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
