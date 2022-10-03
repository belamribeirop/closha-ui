import { Item, ItemService, State, NegociationType } from './../item.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.page.html',
  styleUrls: ['./item-edit.page.scss'],
})
export class ItemEditPage implements OnInit {
  itemForm = this.fb.group({
    id: [0],
    name: ['', Validators.required],
    description: ['', Validators.required],
    price: [null, Validators.required],
    tags: [[], Validators.required],
    image: ['', Validators.required],
    category: [null, Validators.required],
    negociationType: [null, Validators.required],
    status: [null, Validators.required],
  });

  states = [
    { key: 0, label: 'Nova' },
    { key: 1, label: 'Usada' },
    { key: 2, label: 'Semi Nova' },
  ];
  types = [
    { key: 1, label: 'Alugar' },
    { key: 0, label: 'Vender' },
  ];
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private itemService: ItemService
  ) {}

  ngOnInit() {}
  handleSave() {
    const item: Item = {
      id: 0,
      name: this.itemForm.value.name,
      description: this.itemForm.value.description,
      price: this.itemForm.value.price,
      status: this.itemForm.value.status,
      negociationType: this.itemForm.value.negociationType,
      category: this.itemForm.value.category,
      image: this.itemForm.value.image,
      tags: this.itemForm.value.tags,
      ownerId: 0,
    };
    this.itemService.post(item).subscribe({
      next: () => {
        this.router.navigate(['/tabs/home']);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
