import { Component } from '@angular/core';

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

}
