import { Item, ItemService } from './../item/item.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  alugueis: Item[] = [];
  compras: Item[] = [];

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 3,
    autoplay: true,
  };
  //Item object for Nature
  slider = {
    isBeginningSlide: true,
    isEndSlide: false,
  };
  constructor(private itemService: ItemService) {}
  ngOnInit(): void {
    this.itemService.get().subscribe((data) => {
      this.alugueis = data.filter((item) => item.negociationType === 1);
      this.compras = data.filter((item) => item.negociationType === 0);
    });
  }

  slideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }

  //Call methods to check if slide is first or last to enable disbale navigation
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }
  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }
}
