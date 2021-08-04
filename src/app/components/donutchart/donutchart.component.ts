import {Component, Input, OnInit} from '@angular/core';
import {ChartType} from 'chart.js';
import {Label, MultiDataSet} from 'ng2-charts';

@Component({
  selector: 'app-donutchart',
  templateUrl: './donutchart.component.html',
  styles: []
})
export class DonutchartComponent implements OnInit {
  @Input() grafico: any = {
    labels: ['Test1', 'test2', 'test3'],
    data: [24, 30, 46],
    type: 'doughnut',
    leyenda: 'Test generico'
  };

  constructor() {
  }

  ngOnInit() {
  }

  // events
  public chartClicked({event, active}: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({event, active}: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
