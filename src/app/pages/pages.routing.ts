import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InventarioComponent } from './inventario/inventario.component';
import { VentasComponent } from './ventas/ventas.component';

const routes: Routes = [
    {
        path: 'dashboard', component: PagesComponent, children: [
            { path: '', component: DashboardComponent, data: {titulo: 'Dashboard'} },
            { path: 'inventario', component: InventarioComponent, data: {titulo: 'Inventario'} },
            { path: 'ventas', component: VentasComponent, data: {titulo: 'Ventas'} },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class PagesRoutingModule {}