import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImpostazioniPage } from './impostazioni.page';

const routes: Routes = [
  {
    path: '',
    component: ImpostazioniPage
  },
  {
    path:'details',
    loadChildren:()=>import('../details/details.module').then(m=>m.DetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImpostazioniPageRoutingModule {}
