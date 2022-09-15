import { Component } from '@angular/core';
export interface Item {
  id: number;
  img: string;
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  alugueis: Item[] = [
    {
      id: 1,
      img: 'https://ph-cdn3.ecosweb.com.br/imagens01/foto/moda-feminina/camisetas-e-baby-look/blusa-em-helanca-com-decote-v-preta_44497_600_1.jpg',
    },
    {
      id: 2,
      img: 'https://ph-cdn3.ecosweb.com.br/imagens01/foto/moda-feminina/camisetas-e-baby-look/blusa-em-helanca-com-decote-v-preta_44497_600_1.jpg',
    },
    {
      id: 3,
      img: 'https://ph-cdn3.ecosweb.com.br/imagens01/foto/moda-feminina/camisetas-e-baby-look/blusa-em-helanca-com-decote-v-preta_44497_600_1.jpg',
    },
    {
      id: 4,
      img: 'https://ph-cdn3.ecosweb.com.br/imagens01/foto/moda-feminina/camisetas-e-baby-look/blusa-em-helanca-com-decote-v-preta_44497_600_1.jpg',
    },
    {
      id: 5,
      img: 'https://ph-cdn3.ecosweb.com.br/imagens01/foto/moda-feminina/camisetas-e-baby-look/blusa-em-helanca-com-decote-v-preta_44497_600_1.jpg',
    },
  ];
  compras: Item[] = [
    {
      id: 1,
      img: 'https://ph-cdn3.ecosweb.com.br/imagens01/foto/moda-feminina/camisetas-e-baby-look/blusa-em-helanca-com-decote-v-preta_44497_600_1.jpg',
    },
    {
      id: 2,
      img: 'https://ph-cdn3.ecosweb.com.br/imagens01/foto/moda-feminina/camisetas-e-baby-look/blusa-em-helanca-com-decote-v-preta_44497_600_1.jpg',
    },
    {
      id: 3,
      img: 'https://ph-cdn3.ecosweb.com.br/imagens01/foto/moda-feminina/camisetas-e-baby-look/blusa-em-helanca-com-decote-v-preta_44497_600_1.jpg',
    },
    {
      id: 4,
      img: 'https://ph-cdn3.ecosweb.com.br/imagens01/foto/moda-feminina/camisetas-e-baby-look/blusa-em-helanca-com-decote-v-preta_44497_600_1.jpg',
    },
    {
      id: 5,
      img: 'https://ph-cdn3.ecosweb.com.br/imagens01/foto/moda-feminina/camisetas-e-baby-look/blusa-em-helanca-com-decote-v-preta_44497_600_1.jpg',
    },
  ];
  vistas: Item[] = [
    {
      id: 1,
      img: 'https://ph-cdn3.ecosweb.com.br/imagens01/foto/moda-feminina/camisetas-e-baby-look/blusa-em-helanca-com-decote-v-preta_44497_600_1.jpg',
    },
    {
      id: 2,
      img: 'https://ph-cdn3.ecosweb.com.br/imagens01/foto/moda-feminina/camisetas-e-baby-look/blusa-em-helanca-com-decote-v-preta_44497_600_1.jpg',
    },
    {
      id: 3,
      img: 'https://ph-cdn3.ecosweb.com.br/imagens01/foto/moda-feminina/camisetas-e-baby-look/blusa-em-helanca-com-decote-v-preta_44497_600_1.jpg',
    },
    {
      id: 4,
      img: 'https://ph-cdn3.ecosweb.com.br/imagens01/foto/moda-feminina/camisetas-e-baby-look/blusa-em-helanca-com-decote-v-preta_44497_600_1.jpg',
    },
    {
      id: 5,
      img: 'https://ph-cdn3.ecosweb.com.br/imagens01/foto/moda-feminina/camisetas-e-baby-look/blusa-em-helanca-com-decote-v-preta_44497_600_1.jpg',
    },
  ];
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
  constructor() {}

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
