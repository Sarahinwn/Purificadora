import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  menuItems: any = [
    {
      titulo: 'Administración',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Ventas', url: 'ventas' },
        { titulo: 'Inventario', url: 'inventario' },
        { titulo: 'Usuarios', url: 'usuarios' },
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
