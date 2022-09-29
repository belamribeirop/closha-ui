import { Item, ItemService, State } from './../item.service';
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
    price: [0, Validators.required],
    tags: [[], Validators.required],
    photo: ['', Validators.required],
    type: [null, Validators.required],
    state: [null, Validators.required],
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
    this.itemService.post(this.itemForm.value as Item).subscribe({
      next: () => {
        this.router.navigate(['/tabs/home']);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
