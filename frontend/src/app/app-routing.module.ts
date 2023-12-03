import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';


const routes: Routes = [

  
 
  {
    path: '',
    loadChildren: () => import('./user/components/user.module').then((m) => m.UserModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/components/admin.module').then((m) => m.AdminModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
