import { JsonPipe } from "@angular/common";
import { Component, signal } from "@angular/core";
import { Field, form } from "@angular/forms/signals";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { CustomControl } from "./custom-control/custom-control";

@Component({
  selector: 'app-custom-control-form',
  imports: [MatFormFieldModule, MatInputModule, Field , CustomControl, JsonPipe],
  template: `
    <form>
      <app-custom-control [field]="f.color"></app-custom-control>
    </form>

    <span>Form value: {{ f().value() | json }}</span>
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 2rem;
      gap: 1rem;
    }

    form {
      display: flex;
      flex-direction: column;
    }

    span {
      margin-top: 1rem;
    }
  `
})
export default class CustomControlForm {
  f = form(signal({
    color: '',
  }));
}
