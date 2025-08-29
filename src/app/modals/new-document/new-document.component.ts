import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'new-document-modal',
  templateUrl: 'new-document.html',
  styleUrl: '../modals.scss',
  standalone: false,
})
export class NewDocumentModalComponent {
  unitList = [
    { id: 0, name: 'Pixels (px)', value: 'px' },
    { id: 1, name: 'Poibts (pt)', value: 'pt' },
    { id: 2, name: 'Inches (in)', value: 'in' },
    { id: 3, name: 'Milimeters (mm)', value: 'mm' },
    { id: 4, name: 'Centimeters (cm)', value: 'cm' }
  ]
  unitL: Array<String> = [];
  modalForm: FormGroup = new FormGroup({});
  constructor(
    private _fb: FormBuilder,
    public dialogRef: MatDialogRef<NewDocumentModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.createForm();
  }

  createForm() {
    this.modalForm = this._fb.group({
      document: ['Default', Validators.required],
      width: ['100', Validators.required],
      height: ['100', Validators.required],
      unit: [this.unitList[0], Validators.required],
    });
  }

  onNoClick() {
    this.dialogRef.close();
  }

  createDocument() {
    this.dialogRef.close({ ...this.modalForm.value });
  }
}
