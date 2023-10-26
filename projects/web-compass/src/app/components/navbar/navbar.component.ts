import { CommonModule, NgClass, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, OnInit, signal } from '@angular/core';
import { DropdownComponent } from '../common/dropdown/dropdown.component';

@Component({
  selector: 'web-navbar',
  standalone: true,
  imports: [NgFor, NgClass, DropdownComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }

}
