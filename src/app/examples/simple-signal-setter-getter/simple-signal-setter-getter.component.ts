import {Component, OnInit, signal} from '@angular/core';

@Component({
  selector: 'app-simple-signal-setter-getter',
  templateUrl: './simple-signal-setter-getter.component.html',
  styleUrls: ['./simple-signal-setter-getter.component.scss']
})
export class SimpleSignalSetterGetterComponent implements OnInit {
  isVisible = signal(false);

  ngOnInit(): void {
    setTimeout(() => {
      this.isVisible.set(true);
    }, 2000);
  }
}
