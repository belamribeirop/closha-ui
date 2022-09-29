import { Component } from '@angular/core';
import { Item } from '../item.service';

@Component({
  selector: 'app-my-items',
  templateUrl: 'my-items.page.html',
  styleUrls: ['my-items.page.scss'],
})
export class MyItemsPage {
  items: Item[] = [
    {
      id: 1,
      name: 'Calça Wide leg',
      description: 'Calça Jogger nude',
      price: 90.0,
      type: 0,
      state: 0,
      tags: ['calça'],
      photo:
        'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRDwgr4lK0HtjcVagbIG3Hv_DCclMWFuE_D7Zp4kfpFbCDRZe9qIyVFEAeGbSDXFBHXwCGskte4U87HgPRql66SAPqJ5ZEVAAXFZvLMETJGFIIGTx4NFnKtiA&usqp=CAE',
    },
    {
      id: 2,
      name: 'Top branco',
      description: 'Top branco alça fina',
      price: 50.0,
      type: 1,
      state: 1,
      tags: ['top'],
      photo: 'https://cf.shopee.com.br/file/6fb33b2ed8356bb4379e4a14471b09e6',
    },
  ];
  constructor() {}
}
