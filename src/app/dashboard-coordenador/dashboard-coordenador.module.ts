import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DashboardCoordenadorPage } from './dashboard-coordenador.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardCoordenadorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardCoordenadorPage]
})
export class DashboardCoordenadorPageModule {}
