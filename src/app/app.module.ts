import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { RouterModule } from "@angular/router";
import { VentasComponent } from './pages/ventas/ventas.component';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

@NgModule({
  declarations: [
    AppComponent,
    VentasComponent,
    InventarioComponent,
    DashboardComponent,
    NopagefoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'ventas', component: VentasComponent },
      { path: 'inevntario', component: InventarioComponent },
      { path: 'dashboard', component: DashboardComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
