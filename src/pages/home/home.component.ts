import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <main>
      <section class="intro">
        <small>Hi, my name</small>
        <h1>Christianah Adelusi</h1>
        <h2>A Frontend Developer</h2>
      </section>
      <section class="works">
        <h1>Work Category</h1>
        <div class="card">
          @for (os of arr; track os.id) {
              <div class="card-content">
            <h3>{{ os.heading }}</h3>
            <div class="project-image">
              <a href="/works">
                <img src="{{ os.image }}" alt="{{ os.tag }}" />
              </a>
            </div>
          </div>
            }

        </div>
      </section>
    </main>
  `,
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  title = 'Home | Angular - portfolio';

  arr = [
    {
      id: 1,
      heading: 'E-Commerce',
      tag: 'e-commerce',
      image: '../../assets/corperstrade.png',
    },
    {
      id: 2,
      heading: 'FinTech',
      tag: 'fintech',
      image: '../../assets/rackleblock.png',
    },
    {
      id: 3,
      heading: 'EduTech',
      tag: 'edutech',
      image: '../../assets/Screenshot.png',
    },
    {
      id: 4,
      heading: 'Portfolio websites',
      tag: 'websites',
      image: '../../assets/sojitade.png',
    },
  ];
}
