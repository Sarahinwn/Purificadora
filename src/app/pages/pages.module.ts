import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InventarioComponent } from './inventario/inventario.component';
import { VentasComponent } from './ventas/ventas.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagesComponent } from './pages.component';


@NgModule({
  declarations: [
    DashboardComponent,
    InventarioComponent,
    VentasComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
