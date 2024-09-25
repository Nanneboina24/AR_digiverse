import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.scss'
})
export class DetailPageComponent {
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
