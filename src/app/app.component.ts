import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { HubComponent } from './pages/hub/hub.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HubComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Karen';
  ngOnInit(): void {
    initFlowbite();
  }
}
