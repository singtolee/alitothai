import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [
  { path: '', redirectTo: '/home',pathMatch: 'full'},
  { path:'home', component:HomeComponent},
  { path:'login', component:LoginComponent},
  { path:'signup', component:SignUpComponent},
  { path: "**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,LoginComponent,SignUpComponent,PageNotFoundComponent]