import { Component, ElementRef, Renderer2, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js/auto';
import 'chartjs-adapter-date-fns';
@Component({
  selector: 'web-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  private renderer2: Renderer2 = inject(Renderer2)

  public _charts: Chart | undefined;

  public get charts(): any {
    return this._charts
  }

  public set charts(ctx: HTMLCanvasElement) {
    this._charts = new Chart(ctx, {

      type: 'line',
      data: {
        labels: [
          '12-01-2020', '01-01-2021', '02-01-2021',
          '03-01-2021', '04-01-2021', '05-01-2021',
          '06-01-2021', '07-01-2021', '08-01-2021',
          '09-01-2021', '10-01-2021', '11-01-2021',
          '12-01-2021', '01-01-2022', '02-01-2022',
          '03-01-2022', '04-01-2022', '05-01-2022',
          '06-01-2022', '07-01-2022', '08-01-2022',
          '09-01-2022', '10-01-2022', '11-01-2022',
          '12-01-2022', '01-01-2023',
        ],
        datasets: [
          {
            label: 'Current',
            data: [
              5000, 8700, 7500, 12000, 11000, 9500, 10500,
              10000, 15000, 9000, 10000, 7000, 10000, 7200,
              9800, 9000, 10000, 8000, 15000, 12000, 11000,
              13000, 11000, 15000, 17000, 18000,
            ],
            fill: true,
            backgroundColor: 'rgba(59, 130, 246, 0.08)',
            borderColor: 'rgb(99, 102, 241)',
            borderWidth: 2,
            tension: 0,
            pointRadius: 0,
            pointHoverRadius: 3,
            pointBackgroundColor: 'rgb(99, 102, 241)',
          },
          {
            label: 'Previous',
            data: [
              8000, 5000, 6500, 5000, 6500, 12000, 8000,
              9000, 8000, 8000, 12500, 10000, 10000, 12000,
              11000, 16000, 12000, 10000, 10000, 14000, 9000,
              10000, 15000, 12500, 14000, 11000,
            ],
            borderColor: 'rgb(203, 213, 225)',
            fill: false,
            borderWidth: 2,
            tension: 0,
            pointRadius: 0,
            pointHoverRadius: 3,
            pointBackgroundColor: 'rgb(203, 213, 225)',
          },
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            border: {
              display: false,
            },
            grid: {
              display: true,
            },
            ticks: {
              callback: (value) => formatThousands(value),
            },
          },
          x: {
            type: 'time',
            time: {
              parser: 'MM-dd-yyyy',
              unit: 'month',
              displayFormats: {
                month: 'MMM yy',
              },
            },
            border: {
              display: false,
            },
            grid: {
              display: false,
            },

            ticks: {
              autoSkipPadding: 25,
              maxRotation: 0,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              title: _ => 'Point Value',
              label: (context) => formatThousands(context.parsed.y),
            },
          },
        },
        interaction: {
          intersect: false,
          mode: 'nearest',
        },
        responsive: true,
        maintainAspectRatio: true,
      },
    })
  }


  ngOnInit(): void {
    this.charts = this.renderer2.selectRootElement('#analytics-card', true)
  }


}


const formatThousands = (value: any) => Intl.NumberFormat('en-US', {
  maximumSignificantDigits: 3,
  notation: 'compact',
}).format(value);
