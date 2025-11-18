import { Component, signal } from "@angular/core";
import { Field, form } from "@angular/forms/signals";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

@Component({
  selector: 'app-form-with-value',
  imports: [MatFormFieldModule, MatInputModule, Field],
  template: `
    <form>
      <mat-form-field>
        <mat-label>First Name</mat-label>
        <input matInput [field]="f.name" />
      </mat-form-field>
    </form>
  `,
  styles: `
    :host {
      display: flex;
      justify-content: center;
      margin-top: 2rem;
    }

    form {
      display: flex;
      flex-direction: column;
    }
  `
})
export default class FormWithValue {
  model = signal({ name: '' });
  f = form(this.model);

  constructor() {
    this.model.set({ name: 'Bálint' });
  }
}
