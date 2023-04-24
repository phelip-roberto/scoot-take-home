import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {

  ngOnInit(): void {
  }

  @Input()
  data: any[] = [];

  public columns: string[] = ['description', 'dueDate', 'priority'];

  constructor( ) { }

}
