import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
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
      name: ['', Validators.required],
      price: ['', Validators.required],
      address: ['', Validators.required],
      noi: ['', Validators.required],
      rate: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  handleSubmit() {
    // Close dialog
    this.dialogRef.close(this.formGroup.value);
  }
}
