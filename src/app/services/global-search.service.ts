import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalSearchService {
  getData() {
    return [
      {
        name: 'Aramco extends successful partnership with AM F1 to become its title partner',
        img: 'https://www.aramco.com/-/jssmedia/news/2023/astonmartin_aramcoformulaoneteam.jpg?cx=0.5&cy=0.5&cw=1504&ch=846',
      },      {
        name: 'Aramco unveils digital initiatives',
        img: 'https://www.aramco.com/-/jssmedia/news/2024/global-ai-summit-gain.jpeg?cx=0.5&cy=0.5&cw=1504&ch=846',
      },      {
        name: 'Leap Event',
        img: 'https://media.licdn.com/dms/image/D4D12AQGIgqNcNsJ1hQ/article-cover_image-shrink_600_2000/0/1676450606391?e=2147483647&v=beta&t=M2qbEyixRtGyw9fhb0mQ3E7Hca8LJKCwdU87ZyBGToE',
      }, 
      {
        name:'Quarter Report',
        img: 'assets/img7.jpg',
      },
      {
        name: 'Half-Yearly IT Report',
        img: 'assets/img8.jpg',
      },
      {
        name: 'Annual IT Report',
        img: 'assets/img9.jpg',
      },
    ];
  }

  getDatas() {
    return Promise.resolve(this.getData());
  }
}
