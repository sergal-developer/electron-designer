import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'selectbox',
    templateUrl: './select.html',
    styleUrls: ['./select.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [],
    standalone: false,
})
export class SelectComponent implements OnInit {
    @Input() id = 'select';
    @Input() control = new FormControl;
    @Input() title = '';
    @Input() optionList: Array<SelectI> = [];
    @Input() placeholder = '';
    @Input() matValidationError = 'Select an option';
    @Input() matCustomError = '';
    @Input() matCustomHint = '';
    @Input() matTooltipDisableFlag = true;
    @Output() onValueChange = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

    valueChange(event: any) {
        this.onValueChange.emit(event);
    }

    select(event: any) {
        console.log('select.event: ', this.control.value);
        this.onValueChange.emit(this.control.value);
    }

    openChange(event: any) {
        // console.log('openChange.event: ', event);
        // this.onOpenChange.emit(event);
    }
}


export interface SelectI {
    name: string,
    id: number,
    [x:string]: any,
}