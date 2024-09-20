import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  videos: string[] = [
    'assets/video4.mp4',
    'assets/video3.mp4',
    'assets/video2.mp4'
  ];

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

  @ViewChild('videoElement') videoElement!: ElementRef;

  ngOnInit() {
    const video = this.videoElement.nativeElement;
    
    video.addEventListener('canplaythrough', () => {
      video.play();
    });
  }

}
