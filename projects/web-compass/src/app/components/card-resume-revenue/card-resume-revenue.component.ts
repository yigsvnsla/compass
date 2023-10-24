import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule, CurrencyPipe, NgClass, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'web-card-resume-revenue',
  standalone: true,
  imports: [NgClass, TitleCasePipe, CurrencyPipe],
  templateUrl: './card-resume-revenue.component.html',
  styleUrls: ['./card-resume-revenue.component.css'],
})
export class CardResumeRevenueComponent {
  @Input()
  public refRevenue: any

  @Input()
  public indexFromRef: number = 0
}
