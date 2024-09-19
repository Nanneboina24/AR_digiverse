import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  videos: string[] = [
    'assets/video4.mp4',
    'assets/video3.mp4',
    'assets/video2.mp4'
  ];

}
