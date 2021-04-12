import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth/auth.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

import { RouterModule } from "@angular/router";
import { VentasComponent } from './pages/ventas/ventas.component';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    VentasComponent,
    InventarioComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'auth', component: AuthComponent },
      { path: 'ventas', component: VentasComponent },
      { path: 'inevntario', component: InventarioComponent },
      { path: 'dashboard', component: DashboardComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
