import { Component, signal } from "@angular/core";
import { email, Field, form, required } from "@angular/forms/signals";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

@Component({
  selector: 'app-conditional-form',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatCheckboxModule, Field],
  template: `
    <form>
      <mat-form-field>
        <mat-label>First Name</mat-label>
        <input matInput [field]="f.firstName" />
        @if (f.firstName().invalid()) {
          <mat-error>{{ f.firstName().errors()[0].message }}</mat-error>
        }
      </mat-form-field>

      <mat-form-field>
        <mat-label>Last Name</mat-label>
        <input matInput [field]="f.lastName" />
        @if (f.lastName().invalid()) {
          <mat-error>{{ f.lastName().errors()[0].message }}</mat-error>
        }
      </mat-form-field>

      <mat-form-field>
        <mat-label>Email</mat-label>
        <input matInput [field]="f.email" />
        @if (f.email().invalid()) {
          <mat-error>{{ f.email().errors()[0].message }}</mat-error>
        }
      </mat-form-field>

      <mat-checkbox [field]="f.canReceiveNewsletter">Send me newsletters!</mat-checkbox>

      <button mat-button type="button" [disabled]="f().invalid()">Submit</button>
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
      gap: 1rem;
    }
  `
})
export default class ConditionalForm {
  f = form(signal({
    firstName: '',
    lastName: '',
    canReceiveNewsletter: false,
    email: ''
  }), p => {
    required(p.firstName, { message: 'First name is required' });
    required(p.lastName, { message: 'Last name is required' });
    email(p.email, { message: 'Email is not valid' });
    required(p.email, { when: ({ valueOf }) => valueOf(p.canReceiveNewsletter), message: 'Email is required' });
  });
}
