import { ChangeDetectionStrategy, Component, ElementRef, HostListener, Renderer2, ViewChild, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'web-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class DropdownComponent {

  private el: ElementRef = inject(ElementRef)
  public dropDownState = signal(false)

  public get classStyles() {
    return {
      'visible opacity-100 scale-100': this.dropDownState(),
      '!invisible !opacity-0': !this.dropDownState()
    }
  }

  public onDropdownClick(event: Event): void {
    event.stopPropagation();
  }

  public toggleDropdown(event: Event) {
    event.stopPropagation();
    if (!this.dropDownState()) this.dropDownState.update(v => true)
    else this.dropDownState.update(v => false)
  }

  @HostListener('document:click', ['$event'])
  private clickOutside($event: any) {
    if (!this.el.nativeElement.contains($event.target)) this.dropDownState.update(v => false);

  }
}
