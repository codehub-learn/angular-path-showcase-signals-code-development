import {effect, Injectable, signal, WritableSignal} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCardService {
  shoppingCart: WritableSignal<any[]>;
  LOCAL_STORAGE_KEY = 'angular-path-showcase-signals-shopping-cart';
  localStorageSaver = effect(() => {
    localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(this.shoppingCart()))
  })

  constructor() {
    let data: any[] = [
      {
        id: Math.random(),
        title: "TV",
        bought: false
      },
      {
        id: Math.random(),
        title: "Fridge",
        bought: false
      },
      {
        id: Math.random(),
        title: "Sofa",
        bought: false
      },
    ]

    let shoppingListFromLocalStorage = localStorage.getItem(this.LOCAL_STORAGE_KEY);
    if (!shoppingListFromLocalStorage) {
      this.shoppingCart = signal(data);
    } else {
      this.shoppingCart = signal(JSON.parse(shoppingListFromLocalStorage));
    }
  }
}
