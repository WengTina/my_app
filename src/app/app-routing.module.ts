import { SettingComponent } from './setting/setting.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LandingComponent } from './landing/landing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path:'',pathMatch:'full',component:LandingComponent },//整條路徑都長一樣，才會進到這個路徑
  //{ path: 'login', component: LoginComponent },
  { path:'sign-up',component:SignUpComponent},
  //{ path:'home',component:HomeComponent},
  //{ path: '**', component: LoginComponent }, // 萬用路徑，路由沒有比對到，永遠會執行


  { path: '', redirectTo: '/login', pathMatch: 'full' }, // 當路徑是空的時候轉址到 login
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'setting',component: SettingComponent},
  { path: 'help',component: HomeComponent},
  { path: 'logout',component: LogoutComponent},
  { 
   path: 'card',
   children: [
   { path: '', component: CardComponent },
   { path: ':id', component: CardComponent }, // 將這個路由帶入的參數命名為 id
   ]
  },
  { path: 'table', component: TableComponent },
  { path: '**', redirectTo: "/login", pathMatch: "full" }, // 萬用路徑，路由沒有比對到，永遠會執行
   ];
  




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
