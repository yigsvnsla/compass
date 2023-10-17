import { Component, ElementRef, Renderer2, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerMenuComponent } from '../../components/drawer-menu/drawer-menu.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'web-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule,DrawerMenuComponent, NavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {




}

