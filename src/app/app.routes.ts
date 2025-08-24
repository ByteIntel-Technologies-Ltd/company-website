import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home.page').then(m => m.HomePage) },
  { path: 'about', loadComponent: () => import('./pages/about.page').then(m => m.AboutPage) },
  { path: 'services', loadComponent: () => import('./pages/services.page').then(m => m.ServicesPage) },
  { path: 'solutions', loadComponent: () => import('./pages/solutions.page').then(m => m.SolutionsPage) },
  { path: 'industries', loadComponent: () => import('./pages/industries.page').then(m => m.IndustriesPage) },
  { path: 'careers', loadComponent: () => import('./pages/careers.page').then(m => m.CareersPage) },
  { path: 'contact', loadComponent: () => import('./pages/contact.page').then(m => m.ContactPage) },
  { path: '**', redirectTo: '' }
];
