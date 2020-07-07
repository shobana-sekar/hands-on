import { Component, OnInit } from '@angular/core';
import { ITEMS } from './mock-item';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  items = ITEMS;

  constructor() { }

  ngOnInit(): void {
  }

}
