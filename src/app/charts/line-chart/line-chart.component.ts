import { Component, OnInit } from '@angular/core';
import { LINE_CHART_COLORS } from '../../shared/chart.colors';
const LINE_CHART_SAMPLE_DATA: any[] = [
  {data: [32, 24, 24, 36, 32, 28], label: 'Gübre Separatörü'},
  {data: [30, 28, 13, 18, 41, 16], label: 'Dalgıç Pompa'},
  {data: [25, 15, 24, 20, 22, 12], label: 'Dalgıç Karıştırıcı'}
];

const LINE_CHART_LABELS: string[] = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran'];

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }
  lineChartData = LINE_CHART_SAMPLE_DATA;
  lineChartLabels = LINE_CHART_LABELS;
  lineChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false
  };
  lineChartLegend = true;
  lineChartType = 'line';
  lineChartColors = LINE_CHART_COLORS;
  ngOnInit() {
  }

}
