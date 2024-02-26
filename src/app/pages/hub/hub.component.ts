import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { PromoComponent } from '../../layout/promo/promo.component';

@Component({
  selector: 'app-hub',
  standalone: true,
  imports: [NavbarComponent, PromoComponent],
  templateUrl: './hub.component.html',
  styleUrl: './hub.component.css'
})
export class HubComponent {

}
