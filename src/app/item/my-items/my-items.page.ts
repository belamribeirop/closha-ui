import { Component } from '@angular/core';
import { Item, ItemService } from '../item.service';

@Component({
  selector: 'app-my-items',
  templateUrl: 'my-items.page.html',
  styleUrls: ['my-items.page.scss'],
})
export class MyItemsPage {
  items: Item[] = [];
  ownerId: 0;
  constructor(private itemService: ItemService) {
    this.itemService.getByOwnerId(this.ownerId).subscribe({
      next: (data) => {
        this.items = data;
      },
      error: () => {},
    });
  }
}
