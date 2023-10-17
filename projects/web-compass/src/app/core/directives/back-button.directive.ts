import { Directive, HostListener, inject } from '@angular/core';
import { NavigationService } from '../services/navigation.service';

@Directive({
  selector: '[backButton]',
  standalone: true
})
export class BackButtonDirective {

  private navigation: NavigationService = inject(NavigationService)

  @HostListener("click")
  public onClick(): void {
    this.navigation.back();
  }
}
