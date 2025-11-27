import {Component, computed, signal} from '@angular/core';

@Component({
  selector: 'app-eshop-component',
  templateUrl: './eshop-component.component.html',
  styleUrls: ['./eshop-component.component.scss']
})
export class EshopComponentComponent {
  products = [
    {
      name: "Tomatoes",
      quantity: 2,
      price: 5.00
    },
    {
      name: "Potatoes",
      quantity: 1,
      price: 4.00
    },
    {
      name: "Lettuces",
      quantity: 1,
      price: 3.00
    },
    {
      name: "Carrots",
      quantity: 1,
      price: 2.00
    },
    {
      name: "Garlics",
      quantity: 1,
      price: 1.00
    }
  ];

  productsSignal = signal(this.products);
  totalPrice = computed(() => {
    return this.productsSignal().reduce((current, next) => current + (next.quantity * next.price), 0);
  });

  deleteProduct(index: number) {
    // probably not the best way, update would be better witout having to splice the original products array
    this.productsSignal.set(this.products.filter((product) => product !== this.products[index]));
    this.products.splice(index, 1);
  }
}
