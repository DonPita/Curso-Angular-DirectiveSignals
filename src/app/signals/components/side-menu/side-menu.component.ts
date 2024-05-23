import { Component, signal } from '@angular/core';

interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})

export class SideMenuComponent {

  //Metodo tradicional
  // public menuItems: MenuItem[] = [
  //   {title: 'Contador' , route: 'counter' },
  //   {title: 'Usuario' , route: 'user-info' },
  //   {title: 'Mutaciones' , route: 'properties' },
  // ];

  //Solucion con señales
  public menuItems = signal<MenuItem[]>([
    { title: 'Contador', route: 'counter' },
    { title: 'Usuario', route: 'user-info' },
    { title: 'Mutaciones', route: 'properties' },
  ]);
}
