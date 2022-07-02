import { DialogAddComponent } from './../../components/dialog-add/dialog-add.component';
import { Deal } from './../../models/deal';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoading = true;
  dealsData: Deal[] = [];
  constructor(
    private apiService: ApiService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
      this.dealsData = this.apiService.getDeals();
    }, 3000);
  }

  add() {
    const dialogRef = this.dialog.open(DialogAddComponent, {
      minWidth: '500px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dealsData.push({
          name: result?.name,
          address: result?.address,
          price: result?.price,
          noi: result?.noi,
          rate: result?.rate,
        });

        this.snackBar.open('New deal added with success', 'Close');
      }
    });
  }
}
