import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyItemsPage } from './my-items.page';
import { MyItemsPageRoutingModule } from './my-items-routing.module';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, MyItemsPageRoutingModule],
  declarations: [MyItemsPage],
})
export class MyItemsPageModule {}
