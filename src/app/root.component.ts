import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <header class="site-header">
      <div class="container">
        <nav class="navbar">
          <a routerLink="/" class="brand">
            <img src="assets/logo.svg" alt="ByteIntel logo" width="28" height="28" />
            <span>ByteIntel Technologies Ltd</span>
          </a>
          <div class="links">
            <a routerLink="/" [class.active]="active() === '/'">Home</a>
            <a routerLink="/services" [class.active]="active() === '/services'">Services</a>
            <a routerLink="/solutions" [class.active]="active() === '/solutions'">Solutions</a>
            <a routerLink="/industries" [class.active]="active() === '/industries'">Industries</a>
            <a routerLink="/about" [class.active]="active() === '/about'">About</a>
            <a routerLink="/careers" [class.active]="active() === '/careers'">Careers</a>
            <a routerLink="/contact" class="btn">Contact Us</a>
          </div>
        </nav>
      </div>
    </header>

    <main>
      <router-outlet></router-outlet>
    </main>

    <footer class="site-footer">
      <div class="container">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap;">
          <div style="display:flex;align-items:center;gap:10px;">
            <img src="assets/logo.svg" width="24" height="24" alt="ByteIntel logo" />
            <strong>ByteIntel Technologies Ltd</strong>
          </div>
          <small class="meta">© {{year}} ByteIntel Technologies Ltd — All rights reserved.</small>
        </div>
      </div>
    </footer>
  `
})
export class AppComponent {
  year = new Date().getFullYear();
  private router = inject(Router);
  private _active = signal<string>('/');
  active = this._active.asReadonly();

  constructor() {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((e: any) => {
      this._active.set(e.urlAfterRedirects || e.url || '/');
    });
  }
}
