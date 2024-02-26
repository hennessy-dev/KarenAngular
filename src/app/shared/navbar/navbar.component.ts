import { Component, signal } from '@angular/core';

interface Link {
  title: string; 
  path: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl:  './navbar.component.css'
})

export class NavbarComponent {

  public links: Link[]  = [
    {
      title: 'Ubicaciones', 
      path: '#locations'
    },
    {
      title: 'Contactanos', 
      path: '#contact'
    }, 
    {
      title: 'Servicios', 
      path: '#services'
    }, 
    {
      title: 'Quienes Somos', 
      path: '#about'
    },
    {
      title: 'Testimonios', 
      path: '#testimonials'
    },
  ]
}
