import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CdkObserversModule } from './observers/cdk-observers.module';

const routes: Routes = [
  {
    path: 'observers',
    loadChildren: () => CdkObserversModule
}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
