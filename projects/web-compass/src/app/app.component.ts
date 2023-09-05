import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DrawerMenuComponent } from './components/drawer-menu/drawer-menu.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'web-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DrawerMenuComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-compass';
}
