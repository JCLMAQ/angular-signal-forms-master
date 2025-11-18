// import { Component, signal } from "@angular/core";
// import { Field, form, required, submit } from "@angular/forms/signals";
// import { MatButtonModule } from "@angular/material/button";
// import { MatFormFieldModule } from "@angular/material/form-field";
// import { MatInputModule } from "@angular/material/input";

// @Component({
//   selector: 'app-submit-form',
//   imports: [MatFormFieldModule, MatInputModule, MatButtonModule, Field],
//   template: `
//     <form>
//       <mat-form-field>
//         <mat-label>Name</mat-label>
//         <input matInput [field]="f.name" />
//         @if (f.name().invalid()) {
//           <mat-error>{{ f.name().errors()[0].kind }}: {{ f.name().errors()[0].message }}</mat-error>
//         }
//       </mat-form-field>

//       <button mat-button type="button" [disabled]="f().invalid()" (click)="submitForm()">Submit</button>
//     </form>
//   `,
//   styles: `
//     :host {
//       display: flex;
//       justify-content: center;
//       margin-top: 2rem;
//     }

//     form {
//       display: flex;
//       flex-direction: column;
//       gap: 1rem;
//     }
//   `
// })
// export default class ValidatedForm {
//   f = form(signal({
//     name: '',
//   }), p => {
//     required(p.name, { message: 'Name is required' });
//   });

//   submitForm() {
//     submit(this.f, (f) => this.mockHttpRequest(f));
//   }

//   mockHttpRequest(form: Field<{ name: string }>) {
//     return Promise.resolve(
//       form.name() === 'Bálint'
//         ? undefined
//         : [{
//           field: form.name,
//           kind: 'server',
//           message: 'Name is not valid'
//         }]
//     );
//   }
// }
