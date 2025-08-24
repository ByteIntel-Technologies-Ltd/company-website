import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-careers',
  template: `
    <section class="container">
      <h1>Careers</h1>
      <p class="section-sub">We’re building a team of curious, kind, and world-class engineers and designers.</p>
      <div class="card">
        <h3 style="margin-top:0;">Open roles</h3>
        <ul>
          <li>Senior Frontend Engineer (Angular/React)</li>
          <li>Mobile Engineer (React Native)</li>
          <li>Backend Engineer (Java/Spring Boot)</li>
          <li>Data Engineer (Python/SQL)</li>
        </ul>
        <p class="section-sub">Send your CV to <a href="mailto:careers@byteintel.ng">careers@byteintel.ng</a></p>
      </div>
    </section>
  `
})
export class CareersPage {}
