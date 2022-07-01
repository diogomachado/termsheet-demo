import { Deal } from '../../models/deal';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-custom',
  templateUrl: './table-custom.component.html',
  styleUrls: ['./table-custom.component.scss'],
})
export class TableCustomComponent {
  @Input() deals: Deal[] = [];
}
