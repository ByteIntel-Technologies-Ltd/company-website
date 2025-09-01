import { Component, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('byteintel-web');
  private router = inject(Router);
  private _active = signal<string>('/');
  year = new Date().getFullYear();
  active = this._active.asReadonly();

  constructor() {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((e: any) => {
      this._active.set(e.urlAfterRedirects || e.url || '/');
    });
  }
}
