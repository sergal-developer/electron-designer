import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
   {
      path: '',
      component: MainComponent,
      // loadChildren: () => import('./main/main.module').then(m => m.MainModule)
   },
];
