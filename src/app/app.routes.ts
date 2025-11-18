import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home'),
  },
  {
    path: 'simple-form',
    loadComponent: () => import('./simple-form'),
  },
  {
    path: 'validated-form',
    loadComponent: () => import('./validated-form'),
  },
  {
    path: 'conditional-form',
    loadComponent: () => import('./conditional-form'),
  },
  {
    path: 'form-with-value',
    loadComponent: () => import('./form-with-value'),
  },
  {
    path: 'cross-validated-form',
    loadComponent: () => import('./cross-validated-form'),
  },
  {
    path: 'async-form',
    loadComponent: () => import('./async-form'),
  },
  {
    path: 'disabled-form',
    loadComponent: () => import('./disabled-form'),
  },
  {
    path: 'schema-form',
    loadComponent: () => import('./schema-form'),
  },
  // {
  //   path: 'submit-form',
  //   loadComponent: () => import('./submit-form'),
  // },
  {
    path: 'advanced',
    children: [
      {
        path: 'custom-control-form',
        loadComponent: () => import('./advanced/custom-control-form'),
      },
      {
        path: 'multiple-schemas',
        loadComponent: () => import('./advanced/multiple-schemas'),
      },
      {
        path: 'conditional-schema',
        loadComponent: () => import('./advanced/conditional-schema'),
      },
      {
        path: 'form-with-array',
        loadComponent: () => import('./advanced/form-with-array'),
      },
    ]
  },
  {
    path: '**',
    redirectTo: '',
  }
];
