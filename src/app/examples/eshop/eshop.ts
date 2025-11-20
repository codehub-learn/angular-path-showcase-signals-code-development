import {Component, computed, signal} from '@angular/core';

@Component({
  selector: 'app-eshop',
  imports: [],
  templateUrl: './eshop.html',
  styleUrl: './eshop.css',
})
export class Eshop {
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
  ]
  finalCost = 0;
  productsSignal = signal(this.products);
  totalPrice = computed(() => {
    console.log("computation run")
    return this.productsSignal().reduce((current, next) => current + (next.quantity * next.price), 0)
  });

  constructor() {
    // probably should be within an onChange function or (change)
    let finalCost = this.products.reduce((current, next) => current + (next.quantity * next.price), 0);
    console.log(finalCost);
  }

  deleteProduct(index: number) {
    // not the best example, update could be used instead of set
    this.productsSignal.set(this.products.filter((product) => product !== this.products[index]));
    this.products.splice(index, 1);
  }
}
