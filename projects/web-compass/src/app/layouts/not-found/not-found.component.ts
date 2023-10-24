import { Component, inject } from '@angular/core';
import { Location } from '@angular/common'
import { BackButtonDirective } from '../../core/directives/back-button.directive';
@Component({
  selector: 'web-not-found',
  standalone: true,
  imports: [
    BackButtonDirective
  ],
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {
  // private location: Location = inject(Location)

  // public goToBack(){
  //   this.location.back()
  // }
}
