import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { DarkModeService } from '../../core/services/dark-mode.service';

@Component({
  selector: 'web-drawer-menu',
  standalone: true,
  imports: [],
  templateUrl: './drawer-menu.component.html',
  styleUrls: ['./drawer-menu.component.css']
})
export class DrawerMenuComponent implements OnInit {
  public darkModeService: DarkModeService = inject(DarkModeService)


  ngOnInit(): void {
  }
}
