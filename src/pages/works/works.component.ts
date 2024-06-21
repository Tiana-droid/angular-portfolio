import { Component } from '@angular/core';


@Component({
  selector: 'app-works',
  standalone: true,
  imports:[],
  template: `<section class="works">
  <h1>Work Category</h1>
  <div class="card">
    @for (os of arr; track os.id) {
        <div class="card-content">
      <h3>{{ os.heading }}</h3>
      <div class="project-image">
        <img src="{{ os.image }}" alt="{{ os.tag }}" />
      </div>
    </div>
      }

  </div>
</section>`,
  styleUrl: './works.component.scss'
})
export class WorksComponent {
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
