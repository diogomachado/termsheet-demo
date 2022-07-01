import { DialogAddComponent } from './../../components/dialog-add/dialog-add.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TableCustomComponent } from './../../components/table-custom/table-custom.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { TableCustomModule } from 'src/app/components/table-custom/table-custom.module';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableCustomModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
  ],
  exports: [HomeComponent],
  entryComponents: [DialogAddComponent],
})
export class HomeModule {}
