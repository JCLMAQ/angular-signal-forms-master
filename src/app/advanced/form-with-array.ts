import { JsonPipe } from "@angular/common";
import { Component, signal } from "@angular/core";
import { apply, applyEach, Field, form, required, schema } from "@angular/forms/signals";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

type NameSchema = {
  firstName: string;
  lastName: string;
};

type AddressSchema = {
  street: string;
  city: string;
};

type Person = {
  name: NameSchema;
  addresses: AddressSchema[];
}

const nameSchema = schema<NameSchema>((p) => {
  required(p.firstName, { message: 'First name is required' });
  required(p.lastName, { message: 'Last name is required' });
});

const addressSchema = schema<AddressSchema>((p) => {
  required(p.street, { message: 'Street is required' });
  required(p.city, { message: 'City is required' });
});

@Component({
  selector: 'app-form-with-array',
  imports: [Field ,MatFormFieldModule, MatInputModule, MatButtonModule, MatDividerModule, MatCheckboxModule, JsonPipe],
  template: `
    <form>
      <mat-form-field>
        <mat-label>First Name</mat-label>
        <input matInput [field]="f.name.firstName" />
        @if (f.name.firstName().invalid()) {
          <mat-error>{{ f.name.firstName().errors()[0].message }}</mat-error>
        }
      </mat-form-field>

      <mat-form-field>
        <mat-label>Last Name</mat-label>
        <input matInput [field]="f.name.lastName" />
        @if (f.name.lastName().invalid()) {
          <mat-error>{{ f.name.lastName().errors()[0].message }}</mat-error>
        }
      </mat-form-field>

      <mat-divider />

      @for (address of f.addresses; track $index) {
        <mat-form-field>
          <mat-label>Street</mat-label>
          <input matInput [field]="address.street" />
          @if (address.street().invalid()) {
            <mat-error>{{ address.street().errors()[0].message }}</mat-error>
          }
        </mat-form-field>

        <mat-form-field>
          <mat-label>City</mat-label>
          <input matInput [field]="address.city" />
          @if (address.city().invalid()) {
            <mat-error>{{ address.city().errors()[0].message }}</mat-error>
          }
        </mat-form-field>
      }

      <button mat-button type="button" (click)="addAddress()">Add Address</button>

      <mat-divider />

      <button mat-button type="button" [disabled]="f().invalid()">Submit</button>
    </form>

    <span>Form value: {{ f().value() | json }}</span>
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 2rem;
    }

    form {
      display: flex;
      flex-direction: column;
    }
  `
})
export default class FormWithArray {
  model = signal<Person>({
    name: {
      firstName: '',
      lastName: ''
    },
    addresses: [{
      street: '',
      city: ''
    }],
  });
  f = form(this.model, p => {
    apply(p.name, nameSchema);
    applyEach(p.addresses, addressSchema);
  });

  addAddress() {
    this.model.update(m => ({
      ...m,
      addresses: [...m.addresses, { street: '', city: '' }]
    }));
  }
}
