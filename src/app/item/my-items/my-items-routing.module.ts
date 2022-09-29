import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyItemsPage } from './my-items.page';

const routes: Routes = [
  {
    path: '',
    component: MyItemsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyItemsPageRoutingModule {}
