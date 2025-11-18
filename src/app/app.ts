import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, RouterLinkActive],
  template: `
    <mat-toolbar>
      <a matIconButton [routerLink]="['/']">
        <mat-icon>home</mat-icon>
      </a>
      <a matButton [routerLink]="['/simple-form']" routerLinkActive="active">Simple</a>
      <a matButton [routerLink]="['/validated-form']" routerLinkActive="active">Validated</a>
      <a matButton [routerLink]="['/conditional-form']" routerLinkActive="active">Conditionally validated</a>
      <a matButton [routerLink]="['/form-with-value']" routerLinkActive="active">With value</a>
      <a matButton [routerLink]="['/cross-validated-form']" routerLinkActive="active">Cross-validated</a>
      <a matButton [routerLink]="['/async-form']" routerLinkActive="active">Async</a>
      <a matButton [routerLink]="['/disabled-form']" routerLinkActive="active">Disabled</a>
      <a matButton [routerLink]="['/schema-form']" routerLinkActive="active">Schema</a>
      <a matButton [routerLink]="['/submit-form']" routerLinkActive="active">Submit</a>
      <button matButton [matMenuTriggerFor]="menu">Advanced</button>
      <mat-menu #menu="matMenu">
        <button mat-menu-item [routerLink]="['/advanced/custom-control-form']">Custom Control</button>
        <button mat-menu-item [routerLink]="['/advanced/multiple-schemas']">Multiple Schemas</button>
        <button mat-menu-item [routerLink]="['/advanced/conditional-schema']">Conditional Schema</button>
        <button mat-menu-item [routerLink]="['/advanced/form-with-array']">Form With Array</button>
      </mat-menu>
    </mat-toolbar>

    <router-outlet />
  `,
  styles: [`
    @use '@angular/material' as mat;
    
    .active {
      font-weight: bold;
    }
  `],
})
export class App { }
