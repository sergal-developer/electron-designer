import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { ModalsModule } from '../modals/modals.module';

@NgModule({
  imports: [
    CommonModule,
    ModalsModule
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
