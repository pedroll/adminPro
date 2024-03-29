import {Component, OnInit} from '@angular/core';
import {MultiDataSet, Color, Label} from "ng2-charts";
import { ChartType } from 'chart.js';


@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: []
})
export class Graficas1Component implements OnInit {
  // Doughnut
  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100],
    [50, 150, 120],
    [250, 130, 70],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  graficos: any = {
    grafico1: {
      labels: ['Con Frijoles', 'Con Natilla', 'Con tocino'],
      data: [24, 30, 46],
      type: 'doughnut',
      leyenda: 'El pan se come con',
      colores: [
        {backgroundColor: ['#DEDC8A', '#DE525C', '#98C8E1']}
      ]
    },
    grafico2: {
      labels: ['Hombres', 'Mujeres'],
      data: [4500, 6000],
      type: 'doughnut',
      leyenda: 'Entrevistados',
      colores: [
        {backgroundColor: ['#DEDC8A', '#DE525C', '#98C8E1']}
      ]    },
    grafico3: {
      labels: ['Si', 'No'],
      data: [95, 5],
      type: 'doughnut',
      leyenda: '¿Le dan gases los frijoles?',
      colores: [
        {backgroundColor: ['#DEDC8A', '#DE525C', '#98C8E1']}
      ]    },
    grafico4: {
      labels: ['No', 'Si'],
      data: [85, 15],
      type: 'doughnut',
      leyenda: '¿Le importa que le den gases?',
    },
  };

  constructor() {
  }

  ngOnInit() {
  }


}
