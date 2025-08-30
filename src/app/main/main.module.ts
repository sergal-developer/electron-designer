import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { ModalsModule } from '../modals/modals.module';
import { DocumentModule } from '../common/document/document.module';

@NgModule({
  imports: [
    CommonModule,
    ModalsModule,
    DocumentModule
  ],
  declarations: [
    MainComponent
  ],
  exports: [
    MainComponent
  ],
  providers: []
})
export class MainModule {
}
