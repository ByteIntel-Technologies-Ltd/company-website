import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-about',
  template: `
    <section class="container">
      <h1>About ByteIntel</h1>
      <p class="section-sub">
        ByteIntel Technologies Ltd is a Nigerian-born technology company with a global mindset.
        We design and build software platforms that help organizations move faster with intelligence at the core.
      </p>
      <div class="grid cols-3">
        <div class="card">
          <h3>Vision</h3>
          <p>To be a global leader in smart software solutions, revolutionizing industries through intelligent automation, advanced analytics, and digital innovation.</p>
        </div>
        <div class="card">
          <h3>Mission</h3>
          <p>To empower businesses and organizations with smart, scalable, and efficient software solutions that enhance productivity, streamline operations, and drive digital transformation.</p>
        </div>
        <div class="card">
          <h3>Values</h3>
          <ul>
            <li>Customer success</li>
            <li>Craftsmanship</li>
            <li>Trust & integrity</li>
            <li>Innovation</li>
          </ul>
        </div>
      </div>
    </section>
  `
})
export class AboutPage {}
