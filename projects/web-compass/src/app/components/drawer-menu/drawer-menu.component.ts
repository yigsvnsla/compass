import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'web-drawer-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './drawer-menu.component.html',
  styleUrls: ['./drawer-menu.component.css']
})
export class DrawerMenuComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
