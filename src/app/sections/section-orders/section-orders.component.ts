import { Component, OnInit } from '@angular/core';
import { Order} from '../../shared/order';

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css']
})
export class SectionOrdersComponent implements OnInit {

  constructor() { }
  order: Order[] = [
    {id: 1, customer: {id: 1, name: 'Yalın Hayvancılık', state: 'Kırklareli', email: 'mtanriverdi@e-y-s.com'},
    total: 1585, placed: new Date(2019, 3, 27), fulfield: new Date(2019, 3, 27), status: 'completed' },
    {id: 2, customer: {id: 1, name: 'Yalın Hayvancılık', state: 'Kırklareli', email: 'mtanriverdi@e-y-s.com'},
    total: 1585, placed: new Date(2019, 3, 27), fulfield: new Date(2019, 3, 27), status: 'completed' },
    {id: 3, customer: {id: 1, name: 'Yalın Hayvancılık', state: 'Kırklareli', email: 'mtanriverdi@e-y-s.com'},
    total: 1585, placed: new Date(2019, 3, 27), fulfield: new Date(2019, 3, 27), status: 'completed' },
    {id: 4, customer: {id: 1, name: 'Yalın Hayvancılık', state: 'Kırklareli', email: 'mtanriverdi@e-y-s.com'},
    total: 1585, placed: new Date(2019, 3, 27), fulfield: new Date(2019, 3, 27), status: 'completed' },
    {id: 5, customer: {id: 1, name: 'Yalın Hayvancılık', state: 'Kırklareli', email: 'mtanriverdi@e-y-s.com'},
    total: 1585, placed: new Date(2019, 3, 27), fulfield: new Date(2019, 3, 27), status: 'completed' },
  ];
  ngOnInit() {
  }

}
