import { Component, signal } from "@angular/core";
import { disabled, Field, form } from "@angular/forms/signals";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

@Component({
  selector: 'app-disabled-form',
  imports: [MatFormFieldModule, MatInputModule, Field],
  template: `
    <form>
      <mat-form-field>
        <mat-label>First Name</mat-label>
        <input matInput [field]="f.firstName" />
      </mat-form-field>

      <mat-form-field>
        <mat-label>Last Name</mat-label>
        <input matInput [field]="f.lastName" />
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
export default class DisabledForm {
  f = form(signal({
    firstName: '',
    lastName: ''
  }), p => {
    disabled(p.lastName, ({ valueOf }) => valueOf(p.firstName) === 'Bálint');
  });
}
