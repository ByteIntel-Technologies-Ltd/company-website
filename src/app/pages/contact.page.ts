import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
    selector: 'app-contact',
    imports: [ReactiveFormsModule],
    template: `
    <section class="container">
      <h1>Contact Us</h1>
      <p class="section-sub">Tell us about your project. We'll get back to you within 1 business day.</p>

      <form [formGroup]="form" (ngSubmit)="submit()" class="card" novalidate>
        <div class="form-row">
          <div>
            <label for="name">Full name</label>
            <input id="name" formControlName="name" placeholder="Jane Doe">
            <div class="error" *ngIf="form.controls.name.touched && form.controls.name.invalid">Name is required</div>
          </div>
          <div>
            <label for="email">Email</label>
            <input id="email" formControlName="email" placeholder="jane@company.com">
            <div class="error" *ngIf="form.controls.email.touched && form.controls.email.invalid">Valid email is required</div>
          </div>
        </div>

        <div class="form-row">
          <div>
            <label for="phone">Phone</label>
            <input id="phone" formControlName="phone" placeholder="+234 801 234 5678">
          </div>
          <div>
            <label for="company">Company</label>
            <input id="company" formControlName="company" placeholder="Company Ltd">
          </div>
        </div>

        <div>
          <label for="message">Project details</label>
          <textarea id="message" formControlName="message" rows="6" placeholder="What would you like to build?"></textarea>
          <div class="error" *ngIf="form.controls.message.touched && form.controls.message.invalid">Please add a short message</div>
        </div>

        <div style="display:flex;align-items:center;gap:10px;margin-top:10px;">
          <button class="btn" type="submit" [disabled]="loading()">Send message</button>
          <div *ngIf="loading()" class="section-sub">Sending…</div>
          <div *ngIf="success()" class="success">Thanks! We’ll be in touch shortly.</div>
          <div *ngIf="error()" class="error">Something went wrong. Please try again later.</div>
        </div>
      </form>
    </section>
  `
})
export class ContactPage {
  http = inject(HttpClient);
  fb = inject(FormBuilder);

  loading = signal(false);
  success = signal(false);
  error = signal(false);

  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    company: [''],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading.set(true);
    this.success.set(false);
    this.error.set(false);

    const payload = this.form.value;
    this.http.post(`${environment.apiUrl}/contact`, payload).subscribe({
      next: () => {
        this.loading.set(false);
        this.success.set(true);
        this.form.reset();
      },
      error: () => {
        this.loading.set(false);
        this.error.set(true);
      }
    });
  }
}
