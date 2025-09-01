import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./app').then(m => m.App) },
  { path: 'about', loadComponent: () => import('./about/about').then(m => m.About) },
  { path: 'services', loadComponent: () => import('./services/services').then(m => m.Services) },
  { path: 'solutions', loadComponent: () => import('./solutions/solutions').then(m => m.Solutions) },
  { path: 'industries', loadComponent: () => import('./industries/industries').then(m => m.Industries) },
  { path: 'careers', loadComponent: () => import('./careers/careers').then(m => m.Careers) },
  { path: 'contact', loadComponent: () => import('./contact/contact').then(m => m.Contact) },
  { path: '**', redirectTo: '' }
];
