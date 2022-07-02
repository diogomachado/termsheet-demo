import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add',
  templateUrl: './dialog-add.component.html',
  styleUrls: ['./dialog-add.component.scss'],
})
export class DialogAddComponent implements OnInit {
  formGroup: FormGroup;
  name = new FormControl();

  constructor(
    public dialogRef: MatDialogRef<DialogAddComponent>,
    private formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      name: new FormControl(),
      price: new FormControl(),
      address: new FormControl(),
      noi: new FormControl(),
      rate: new FormControl(),
    });
  }

  ngOnInit(): void {}

  handleSubmit() {
    // Close dialog
    this.dialogRef.close(this.formGroup.value);
  }
}
