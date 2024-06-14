import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';



// @Component({
//   selector: 'app-user',
//   template: `
//     Username: {{ username }}
//   `,
//   standalone: true,
// })
// export class UserComponent {
//   username = CoursesComponents
// }


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [ RouterOutlet, RouterLink,CommonModule],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Porfolio';
}