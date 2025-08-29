import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'textbox',
    templateUrl: './textbox.html',
    styleUrls: ['./textbox.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [],
    standalone: false,
})
export class TextboxComponent implements OnInit {
    @Input() id = 'textbox';
    @Input() control = new FormControl();
    @Input() title = '';
    @Input() maxlength = 1000;
    @Input() placeholder = '';
    @Input() type = 'text';
    @Input() multiLine = false;
    @Input() matValidationError = 'This Field is required';
    @Input() matCustomError = '';
    @Input() matCustomHint = '';
    @Input() maxRows = 5;
    @Input() minRows = 2;
    @Output() onValueChange = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

    valueChange(event: any) {
        this.onValueChange.emit(event);

        console.log('this.control: ', this.control);
    }
}
