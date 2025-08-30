import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'document-view',
    templateUrl: './document.html',
    styleUrls: ['./document.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [],
    standalone: false,
})
export class DocumentComponent implements OnInit {
    @Input() id = 'document';
    @Input() size: SizeDocument = { width: 0, height: 0, unit: 'px' };
    @Input() title = '';
    @Output() onValueChange = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

    valueChange(event: any) {
        this.onValueChange.emit(event);
    }

    get sizeDocument() {
        return `width: ${ this.size.width }${ this.size.unit }; height: ${ this.size.height }${ this.size.unit };`
    }

}


export interface SizeDocument {
    width: number,
    height: number,
    unit: string
}

export interface Document {
    name: string,
    id: number,
    size: SizeDocument,
    content: string,
    active: boolean
}