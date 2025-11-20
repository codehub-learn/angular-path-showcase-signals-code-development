import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-simple-signal-setter-getter',
  imports: [],
  templateUrl: './simple-signal-setter-getter.html',
  styleUrl: './simple-signal-setter-getter.css',
})
export class SimpleSignalSetterGetter {
  isVisible = signal(false);

  constructor() {
    setTimeout(() => this.isVisible.set(true), 3000);
  }
}
