import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {
  images: any[] = [
    {
      name: 'Quarter Report',
      desc: 'This quarter, D/IT achieved key project milestones and improved system performance. Upcoming initiatives focus on innovation and enhanced security.',
      img: 'assets/img7.jpg'
    },
    {
      name: 'Half-Yearly IT Report',
      desc: 'D/IT completed major projects and implemented new technologies, driving efficiency. The next phase targets further optimization and scaling key services.',
      img: 'assets/img8.jpg'
    },
    {
      name: 'Annual IT Report',
      desc: 'This year, D/IT achieved significant advancements in digital transformation and security. Looking ahead, the focus is on sustaining growth and innovation for future success.',
      img: 'assets/img9.jpg'
    }
  ];

  navbarSticky: boolean = false;

  // Listen to scroll events
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 100) {
      this.navbarSticky = true;
    } else {
      this.navbarSticky = false;
    }
  }
}
