import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {
  images: string[] = [
    'assets/img7.jpg',
    'assets/img8.jpg',
    'assets/img9.jpg'
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
