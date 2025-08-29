import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewDocumentModalComponent } from '../modals/new-document/new-document.component';

@Component({
  selector: 'main-component',
  templateUrl: 'main.html',
  styleUrl: './main.scss',
  standalone: false,
})
export class MainComponent {
  title = 'designer';
  layout = 'tools';
  menus = ['File', 'Edit', 'View', 'Arrange', 'Object', 'Select', 'Window', 'Help'];

  constructor(public dialog: MatDialog) {
  }


  changeLayout() {
    this.layout = this.layout == 'tools' ? 'tool-left' :
      this.layout == 'tool-left' ? 'tool-right' :
      this.layout == 'tool-right' ? '' :
      this.layout == '' ? 'tools' : 'tools';
  }

  createNewDocument() {
    const dialogRef = this.dialog.open(NewDocumentModalComponent, {
      width: '300px',
      autoFocus: false,
      disableClose: true,
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('result: ', result);
    });
  }
}
