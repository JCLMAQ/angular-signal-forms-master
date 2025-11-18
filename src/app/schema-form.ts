import { Component, signal } from "@angular/core";
import { Field, form, required, schema } from "@angular/forms/signals";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

type NameData = {
  firstName: string;
  lastName: string;
};

const nameSchema = schema<NameData>((p) => {
  required(p.firstName, { message: 'First name is required' });
  required(p.lastName, { message: 'Last name is required' });
});

@Component({
  selector: 'app-schema-form',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, Field],
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
    }
  `
})
export default class SchemaForm {
  model = signal<NameData>({
    firstName: '',
    lastName: ''
  });
  f = form(this.model, nameSchema);
}
