import { Component, model } from "@angular/core";

@Component({
  selector: 'app-custom-control',
  template: `
      <div [style.backgroundColor]="value()" (click)="changeColor()">Click Me!</div>
    `,
  styles: `
    :host {
      display: flex;
      justify-content: center;
    }

    div {
      width: 100px;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `
})
export class CustomControl {
  value = model('');

  colors = ['red', 'green', 'blue', 'yellow'];

  changeColor() {
    const randomIndex = Math.floor(Math.random() * this.colors.length);
    this.value.set(this.colors[randomIndex]);
  }
}