
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DocumentComponent } from './document.component';

@NgModule({
    declarations: [DocumentComponent],
    imports: [
        CommonModule,
        MatTooltipModule
    ],
    exports: [DocumentComponent],
    providers: [],
})
export class DocumentModule {}
