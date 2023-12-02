import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AdminModule } from './admin.module';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: []
  }
]


  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })

export class AdminRoutingModule { }
