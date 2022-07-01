import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { TableCustomComponent } from './table-custom.component';

@NgModule({
  declarations: [TableCustomComponent],
  imports: [CommonModule, MatTableModule],
  exports: [TableCustomComponent],
})
export class TableCustomModule {}
