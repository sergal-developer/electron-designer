import { NgModule } from '@angular/core';
import { TextboxModule } from './textbox/textbox.module';
import { SelectModule } from './select/select.module';

@NgModule({
  imports: [
    TextboxModule,
    SelectModule
  ],
  exports: [
    TextboxModule,
    SelectModule
  ]
})
export class MaterialModule {
}
