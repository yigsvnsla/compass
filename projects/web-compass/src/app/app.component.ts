import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DrawerMenuComponent } from './components/drawer-menu/drawer-menu.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SwUpdate } from '@angular/service-worker'
import { SwService } from './core/services/sw.service';
import { DarkModeService } from './core/services/dark-mode.service';
@Component({
  selector: 'web-root',
  standalone: true,
  imports: [RouterOutlet],
  providers: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
