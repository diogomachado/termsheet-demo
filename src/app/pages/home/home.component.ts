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
  dealsData: Deal[] = [];
  constructor(
    private apiService: ApiService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.dealsData = this.apiService.getDeals();
  }

  add() {
    const dialogRef = this.dialog.open(DialogAddComponent, {
      minWidth: '500px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      // Fake added
      this.dealsData.push({
        name: 'Company name',
        adress: 'New York City, 28, Streets B',
        price: 213213123,
        noi: '2213123',
        rate: '23',
      });

      // TODO: add in the list
      console.log(`Dialog result: ${result}`);
      this.snackBar.open('New deal added with success', 'Close');
    });
  }
}
