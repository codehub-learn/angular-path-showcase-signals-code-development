import {Component, effect, signal} from '@angular/core';

@Component({
  selector: 'app-print-current-date',
  imports: [],
  templateUrl: './print-current-date.component.html',
  styleUrl: './print-current-date.component.scss',
})
export class PrintCurrentDateComponent {
  date = signal<Date | null>(null);
  actionLogger = effect((onCleanup) => {
    let interval: any;
    if (this.date()) {
      interval = setInterval(() => console.log(`Current date shown is: ${this.date()}`), 1000)
    }
    onCleanup(() => {
      console.log("Cleaning old interval...");
      if (interval) {
        clearInterval(interval)
      }
    })
  })

  setCurrentDate() {
    this.date.set(new Date());
  }
}
