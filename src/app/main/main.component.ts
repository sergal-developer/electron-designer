import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewDocumentModalComponent } from '../modals/new-document/new-document.component';
import { Document } from '../common/document/document.component';

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
  documents: Array<Partial<Document>> = [];

  constructor(public dialog: MatDialog) {
    const document: Partial<Document> = {
      id: new Date().getTime(),
      name: 'document',
      size: {
        width: 1319,
        height: 780,
        unit: 'px'
      },
      content: '',
      active: true
    }
    this.documents.push(document);
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
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('result: ', result);
      if (result) {
        this.documents.map(x => x.active = false);

        const document: Partial<Document> = {
          id: new Date().getTime(),
          name: result.document,
          size: {
            width: result.width,
            height: result.height,
            unit: result.unit.value
          },
          content: '',
          active: true
        }
        this.documents.push(document);
      }
    });
  }

  closeDocument(document: any) {
    console.log('document: ', document);

  }
}
